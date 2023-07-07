

export default function Note({ note, onType }) {  
    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const editMeId = note.id
        onType(editMeId, "title", updatedValue);
    }

    const updateDescription = (e) => {
         const updatedValue = e.target.value;
        const editMeId = note.id
        onType(editMeId, "description", updatedValue);
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