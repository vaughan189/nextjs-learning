// pages/notes/index.jsx
import React from 'react'
import Link from 'next/link'

export default ({notes}) => {
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
    const {data} = await res.json()
    return {
      props: {notes: data}
    }
  }