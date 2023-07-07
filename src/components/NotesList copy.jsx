import Note from "./Note";

export default function NotesList({ notes, onType }) {

  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = notes.filter(keepSearchMatches);

  // const keepSearchMatches = (note) => note.doesMatchSearch;
  // const searchMatches = notes.filter((note) => note.doesMatchSearch)
  // console.log(searchMatches)

  const renderNote = (note) => (
    <Note note={note} key={note.id} onType={onType} />
  );
    const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;

  // return (
  //     <>
  //       <ul className="notes-list">
  //       {searchMatches.map((note) => <Note
  //         note={note}
  //         onType={onType}
  //         key={note.id}
  //       />)}
  //       </ul>    
  //   </>
  // )
}