import React, { useContext } from 'react'
import { AppContext } from '../pages'

const ChildComponent = () => {
  const numero = useContext(AppContext)

  return <div>inner... {numero}</div>
}

export default ChildComponent
