import React from 'react'
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const param = router.query
    console.log(param);
    return (
        <h1>hello</h1>
    )
}