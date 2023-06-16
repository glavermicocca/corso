import React, { useEffect, useState } from 'react'

enum RadioType {
  SI = 'SI',
  NO = 'NO'
}

enum RadioBackgroundType {
  RED = 'red',
  GREEN = 'green'
}

const MyUseEffectOtherCase = () => {
  const [sideEffect, setSideEffect] = useState(RadioType.NO)

  const [name, setName] = useState<string>('')
  const [radio, setRadio] = useState<RadioBackgroundType>(RadioBackgroundType.GREEN)

  console.log('[Rendering] name/radio : ', name, radio)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    // non sono sincrono...
    console.log('[Callback] name/radio : ', name, radio)
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(event.target.value == RadioBackgroundType.GREEN.toString() ? RadioBackgroundType.RED : RadioBackgroundType.GREEN)
    // non sono sincrono...
    console.log('[Callback] name/radio : ', name, radio)
  }

  const handleSideEffectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSideEffect(event.target.value == RadioType.SI.toString() ? RadioType.NO : RadioType.SI)
    // non sono sincrono...
    console.log('[Callback] sideEffect : ', sideEffect)
  }

  const merge = { name, radio }

  useEffect(() => {
    console.log('[Log] merge : ', merge.name, merge.radio)
  }, [merge])

  return (
    <div style={{ backgroundColor: radio, border: sideEffect == RadioType.SI ? "solid" : "none" }}>
      <input onChange={handleNameChange} type="text" value={name} />
      <input onChange={handleRadioChange} type="checkbox" value={radio} />
      <input onChange={handleSideEffectChange} type="checkbox" value={sideEffect} />
    </div>
  )
}

export default MyUseEffectOtherCase
