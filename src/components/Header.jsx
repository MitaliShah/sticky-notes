
export default function Header() {
    return (
        <>
            <h1>Super Sticky Note</h1>
            <aside>
                <button>+ New Note</button>
                <input
                    type="text"
                    placeholder="Type here to search..."
                />
            <ul>
            <li>
                <input type="text" placeholder="Title" />
                <textarea placeholder="Description..." />
                <span>X</span>
            </li>
            <li>
                <input type="text" placeholder="Title" />
                <textarea placeholder="Description..." />
                <span>X</span>
            </li>
            <li>
                <input type="text" placeholder="Title" />
                <textarea placeholder="Description..." />
                <span>X</span>
            </li>
            </ul>
            </aside>
        </>    
    )
}