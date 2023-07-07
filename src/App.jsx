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

	
	function onType(editMeId, updatedKey, updatedValue) {
		const updatedNotes = notes.map((note) => {
			if (note.id != editMeId) {
				return note;
			} else {
				if (updatedKey === "title") {
					return {...note, title: updatedValue}
				} else {
					return {...note, description: updatedValue}
				}
			}
		})
		setNotes(updatedNotes)
	}
  
	return (
    <>
		<Header
				searchText={searchText}
				setSearchText={setSearchText}
				addNote={addNote}
				
		/>
		<NotesList
				notes={notes}
				// setNotes={setNotes}
				onType={onType}
		/>
    </>
  )
}

export default App
