import React, { useCallback, useEffect, useMemo, useState } from 'react'

const MyUseContext = () => {
  const [count, setCount] = useState(0)

  console.log('[Rendering] count : ', count)

  // a diff di Memo Callback salva funzioni (cambia solo se cambia count)
  // STAGE 1
  const mostraCount = useCallback(() => alert(`Count vale : ${count}`), [count])

  // STAGE 2
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setCount(prev => prev + 1)
    // non sono sincrono...
    console.log('[Callback] count : ', count)
  }

  // colcolo oneroso che vorrei fare solo se necessario
  // STAGE 3
  const powerFunction = useMemo(() => {
    return count ** 2
  }, [count])

  // cambia le carte in tavolo
  const handlePower = (event: React.MouseEvent<HTMLInputElement>) => {
    const result = powerFunction
    setCount(result)
  }

  return (
    <>
      count : {count}
      <input onClick={handleClick} type="button" value="Click me" />
      <input onClick={handlePower} type="button" value="POWER" style={{ backgroundColor: 'red' }} />
      {/* mostraCount verrà passato ai componenti figli - sarà la medesima istanza per tutti i figli qui di seguito */}
    </>
  )
}

export default MyUseContext
