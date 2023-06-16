import React, { useEffect, useRef, useState } from 'react'

const MyUseRefInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  console.log('[Rendering] Component...')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input defaultValue="" ref={inputRef} type="input" />
    </>
  )
}

export default MyUseRefInput
