
export default function Header({addNote, searchText, setSearchText}) {

    return (
        <>
            <header className="app-header">
                <h1 className="app-header__title">Super Sticky Note</h1>
                <aside className="app-header__controls">
                    <button
                        className="add-new"
                        onClick={addNote}
                    >+ New Note</button>
                    <input
                        type="text"
                        placeholder="Type here to search..."
                        className="search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
            </aside>
            </header>    
        </>    
    )
}