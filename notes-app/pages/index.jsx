// pages/index.jsx
import React from 'react'
import Link from 'next/link'
export default function Index() {
    return (
        <div>
            <h1>Index page</h1>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </div>
    )
}