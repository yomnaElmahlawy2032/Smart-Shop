import React from 'react'
import "./Counter.scss"
const Counter = ({counter , onInc , onDec}) => {
    const { count } = counter
  return (

    <div className='oppo' >
      <button className='bn'  onClick={() => onDec(counter)}>-</button>
      <span>{count}</span>
      <button className='bn' onClick={() => onInc(counter)}>+</button>
    </div>
  )
}

export default Counter
