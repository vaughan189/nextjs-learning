// pages/notes/[id].jsx
import React from 'react'

import Link from 'next/link'

export default ({note}) => {

    return (
        <div>
            <h1>Note: {note.id} </h1>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
            <div>
                <a href={process.env.ABOUT_APP_URL}>APP URL</a>

            </div>
        </div>
    )
}

// pages/note/[id].jsx
export async function getServerSideProps({params, req, res}) {
    const response = await fetch(`http://localhost:3000/api/notes/${params.id}`)
    // so much power!
    if (!response.ok) {
      res.writeHead(302, { Location: '/notes' })
      res.end()
      return {props: {}}
    }
    const {data} = await response.json()
    if (data) {
      return {
        props: {note: data}
      }
    }
  }