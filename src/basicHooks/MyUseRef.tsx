import React, { useRef, useState } from 'react'

const MyUseRef = () => {
    const countRef = useRef<number>(0)

    console.log('[Rendering] count : ', countRef.current)

    const handleClick = (event: React.SyntheticEvent) => {
        countRef.current++
        // sono sincrono...
        console.log('[Callback] count : ', countRef.current)
    }

    return (
        <>
            <input onClick={handleClick} type="button" value="click me ref" />
            <div>count : {countRef.current}</div>
        </>
    )
}

export default MyUseRef
