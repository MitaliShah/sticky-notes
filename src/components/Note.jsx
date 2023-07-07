

export default function Note({ note, updateNote }) {  
    const updateTitle = (e) => {
        const textValue = e.target.value;
        const noteId = note.id
        updateNote(noteId, "title", textValue);
    }

    const updateDescription = (e) => {
         const textValue = e.target.value;
        const noteId = note.id
        updateNote(noteId, "description", textValue);
    }
    return (
        <li className="note">
            <input
                type="text"
                placeholder="Title"
                className="note__title"
                value={note.title}
                onChange={updateTitle}
            />
            <textarea
                placeholder="Description..."
                className="note__description"
                value={note.description}
                onChange={updateDescription}
            />
            <span className="note__delete">X</span>
        </li>
    )
}