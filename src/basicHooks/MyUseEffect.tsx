import React, { useEffect, useState } from 'react'

const MyUseEffect = () => {
  const [count, setCounter] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)

  console.log('[Rendering] count : ', count)

  useEffect(() => {
    console.log('[Log] count/progress : ', count, progress)

    const timerIdProgress = setInterval(() => {
      setProgress(prev => (prev += 1))
    }, 1000)

    const timerIdCounter = setInterval(() => {
      clearInterval(timerIdProgress)
      setCounter(prev => (prev += 1))
    }, 5000)

    return () => {
      clearInterval(timerIdCounter)
    }
  }, [count])

  const handleClick = (event: React.SyntheticEvent) => {
    setCounter(prev => (prev += 1))
    // non sono sincrono...
    console.log('[Callback] count : ', count)
  }

  return (
    <>
      <input onClick={handleClick} type="button" value="click me" />
      <div>progress : {progress}</div>
      <div>count : {count}</div>
    </>
  )
}

export default MyUseEffect
