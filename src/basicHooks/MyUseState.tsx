import React, { useState } from 'react'

const MyUseState = () => {

    const [count, setCounter] = useState<number>(0)

    console.log("[Rendering] count : ", count)

    const handleClick = (event: React.SyntheticEvent) => {
        setCounter(prev => prev+=1)
        // non sono sincrono...
        console.log("[Callback] count : ", count)
    }

    return (
        <>
            <input onClick={handleClick} type='button' value="click me" />
            <div>count : {count}</div>
        </>
    )
}

export default MyUseState