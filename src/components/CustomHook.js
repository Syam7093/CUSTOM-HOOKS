import React from 'react'
import { SyamustomHookssyam } from '../utils'

const CustomHook = () => {
    const {number,inc,dec}=SyamustomHookssyam()
  return (
    <div>
        <button onClick={dec}>dec</button>
        <h1>{number}</h1>
        <button onClick={inc}>inc</button>
    </div>
  )
}

export default CustomHook