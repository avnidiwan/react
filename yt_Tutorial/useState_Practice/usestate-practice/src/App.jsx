import React from 'react'
import { useState } from 'react'
import './App.css'
const App = () => {
  let count = 0
  let [num, setNum] = useState(0)
  return (
    <>
      <div className="box">
        <div className="button" id='decrease' ><button   onClick={() => setNum(num - 1)}>-</button></div>
        <div className="button" id='count'><h1>{num}</h1></div>
        <div className="button" id='increase' ><button onClick={() => setNum(num + 1)}>+</button></div>
      </div>
      <button id="reset" onClick={()=>setNum(0)}>RESET</button>
    </>
  )
}

export default App
