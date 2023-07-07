import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import "./styles.css";

function App() {	
	const [notes, setNotes] = useState([]);
	const [searchText, setSearchText] = useState("");
	
	function addNote() {
		const newNote = {		
			id: Date.now(),
			title: "",
			description: "",
			doesMatchSearch: true,		
		}
		console.log(`newNote`, newNote);
		console.log(`notes`, notes);
		setNotes((notes) => [newNote, ...notes])
	}

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
				// setNotes={setNotes}
				updateNote={updateNote}
				deleteNote={deleteNote}
		/>
    </>
  )
}

export default App
