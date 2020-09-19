// pages/notes/index.jsx
import React from 'react'
import Link from 'next/link'

export default function Index({notes}) {
    // const notes = new Array(15).fill(1).map((e, i) => ({ id: i + 1, title: `Note: ${i + 1}` }));
    return (
        <div>
            <h1>Notes</h1>{notes.map(note => (
                <div key={note.id}>
                    <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                        <a>
                            <strong>{note.title}</strong>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

// pages/note/index.jsx
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/notes/`)
    const { data } = await res.json()
    return {
        props: { notes: data }
    }
}