import Note from "./Note";

export default function NotesList({ notes, updateNote, deleteNote }) {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note note={note} key={note.id} updateNote={updateNote} deleteNote={deleteNote} />
  );

  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
  
}