import React from "react";
// import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Note({note}) {
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <div>
            <h1>Note: {note.id} </h1>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
            <br />
            <a href={process.env.HELP_APP_URL}>Help app url</a>
        </div>
    )
}

// pages/note/[id].jsx
export async function getServerSideProps({ params, req, res }) {
    const response = await fetch(`http://localhost:3000/api/notes/${params.id}`)
    if (!response.ok) {
        res.writeHead(302, { Location: '/notes' })
        res.end()
        return { props: {} }
    }
    const { data } = await response.json()
    if (data) {
        return {
            props: { note: data }
        }
    }
}