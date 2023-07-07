import { useState, useEffect } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import "./styles.css";

function App() {
	// Getting the notes from local storage
	const [notes, setNotes] = useState(
    	JSON.parse(window.localStorage.getItem("notes")) || []
  	);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		// Setting the notes to the local storage
    	window.localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);
	
	// Add new note object to the notes array
	function addNote() {
		const newNote = {		
			id: Date.now(),
			title: "",
			description: "",
			doesMatchSearch: true,		
		}
		setNotes((previousNotes) => [newNote, ...previousNotes])
	}

	// Filter list of notes if thy match search text
	function onSearch(text) {
		const newSearchText = text.toLowerCase();
		const updatedNotes = notes.map((note) => {
			if (!newSearchText) {
				note.doesMatchSearch = true;
				return note;
			} else {
				const title = note.title.toLowerCase();
				const description = note.description.toLowerCase();
				const titleMatch = title.includes(newSearchText);
				const descriptionMatch = description.includes(newSearchText);
				const hasMatch = titleMatch || descriptionMatch;
				note.doesMatchSearch = hasMatch;
				return note;
			}
		})
		setNotes(updatedNotes)
		setSearchText(newSearchText)
	}

	
	function updateNote(noteId, fieldToUpdate, textValue) {
		const updatedNotes = notes.map((note) => {
			if (note.id != noteId) {
				return note;
			} else {
				if (fieldToUpdate === "title") {
					return {...note, title: textValue}
				} else {
					return {...note, description: textValue}
				}
			}
		})
		setNotes(updatedNotes)
	}

	function deleteNote(noteId) {
		const updatedNotes = notes.filter((note) => note.id !== noteId)
		setNotes(updatedNotes);
		console.log(notes)
	}
  
	return (
    <>
		<Header
				searchText={searchText}
				setSearchText={setSearchText}
				addNote={addNote}
				onSearch={onSearch}
		/>
		<NotesList
				notes={notes}
				updateNote={updateNote}
				deleteNote={deleteNote}
		/>
    </>
  )
}

export default App
