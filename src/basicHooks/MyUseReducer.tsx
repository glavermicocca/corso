import React, { useReducer, useState } from 'react'

enum CounterAction {
  inc = 'INC',
  dec = 'DEC'
}

const counterReducer = (state: number, action: { type: CounterAction; payload: number }) => {
  switch (action.type) {
    case CounterAction.inc:
      return state + action.payload
    case CounterAction.dec:
      return state - action.payload
    default:
      throw Error()
  }
}

const MyUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, 0)

  const payload = 2

  return (
    <>
      <div>count : {state}</div>
      <input onClick={() => dispatch({ type: CounterAction.inc, payload })} type="button" value="INC" />
      <input onClick={() => dispatch({ type: CounterAction.dec, payload })} type="button" value="DEC" />
    </>
  )
}

export default MyUseReducer
