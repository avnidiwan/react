//const App=()=>{
//   return (<>
//  <form>
//  <fieldset>
//   <legend>FORM</legend>
//    <input type="text" placeholder="Enter your name!"></input><br></br>
//   <input type="email" placeholder="Enter your email"></input><br></br>
//   <input type="password" placeholder="Enter the password"></input><br></br>
//   <button type="submit">SUBMIT</button><button type="reset">RESET</button>
//  </fieldset>
//  </form>
//   </>)
//}

// import { isValidElement } from "react"



// const App=()=>{
// let count=0
// function fun1(){
//   count+=1;
//   console.log(count);
// }
// return(<>
// <div> 
//   <h2> {count} </h2>
//   <button onClick={fun1}>click</button>
//  </div>
// </>)
// }



// import React, {useState} from "react"
// const App=()=>{
//   let [state, SetState]=useState(0)
//   function fun1(){
//     SetState(state+1)
//   }
//   function fun2(){
//     SetState(state-1)
//   }
//   function reset(){
//     SetState(state=0)
//   }

//   //  let [state, SetState]=useState("red")
//   // function changecolor(){
//   //  if(state=="red"){
//   //   SetState("gold")
//   //  } else{
//   //   SetState("green")
//   //  }
//   // }

//   return (<>

//     <h2>{state}</h2>
//  {/* <button onClick={fun1}>ADD</button>
//  <button onClick={reset}>RESET</button>
//  <button onClick={fun2}>SUBTRACT</button> */}

//   <button onClick={()=>{SetState(state+1)}}>ADD</button>
//  <button onClick={()=>{SetState(state=0)}}>RESET</button>
//  <button onClick={()=>{SetState(state-1)}}>SUBTRACT</button>

//   </>)
// }




// import React, {useState} from "react"
// const App=()=>{
//   let[count, SetCount]=useState(0)
//   setInterval(()=>{
//     SetCount(new Date().toLocaleTimeString())
//   })
//   return(<>
//   <div>
//     <h2>{count}</h2>
//   </div>

//   </>)
// }




// import React, { useEffect, useState } from "react"
// const App = () => {
//   let [count, setCount] = useState(0)
//   useEffect(()=>{
//     console.log("hey unnatiii!")
//   },[])
//   return (<>
//     <div>
//       <h2> {count} </h2>
//       <button onClick={()=>setCount(count + 1)}>click</button>
//     </div>
//   </>)
// }




// import React, { useEffect, useState } from "react"
// const App = () => {
//   let [count, setCount] = useState(0)
//   let [city, setCity]= useState("delhi")
//   useEffect(()=>{
//     console.log("hey unnatiii!")
//   },[count])
//   return (<>
//     <div>
//       <h2> {count} </h2>
//       <button onClick={()=>setCount(count + 1)}>click</button>
//       <h2>{city}</h2>
//       <button onClick={()=>setCity("mumbai")}>Change</button>
//     </div>
//   </>)
// }




// import React, { useEffect, useState } from "react"
// import './App.css'
// const App = () => {
//   let [Apidata, SetApiData] = useState([])
//   useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res)=>{
//     return res.json()
//   }).then((data)=>{
//     console.log(data)
//     SetApiData(data)
//   })
//   },[])
//   return (<>
//     <div>
//       {
//         Apidata.map((a)=>{
//           return(<>
//           <p>{a.id}</p>
//           <h2>{a.title}</h2>
//           </>)
//         })
//       }

//       {/* <h2> {count} </h2>
//       <button onClick={()=>setCount(count + 1)}>click</button> */}
//     </div>
//   </>)
// }



// import React, { useState, useEffect } from "react"
// import "./App.css"

// const App = () => {
//   let [apiData, setData] = useState([])
//   useEffect(() => {
//     fetch("https://dummyjson.com/recipes").then((res) => {
//       return res.json()
//     }).then((data) => {
//       console.log(data.recipes)
//       setData(data.recipes)
//     })
//   })
//   // function deletee(id){
//   //   let newArr=apiData.filter((a,b)=>{
//   //     return b!==id
//   //   })
//   //   setData(newArr)
//   // }
//   return (
//     <div>
//       {
//         apiData.map((a,index)=>{
//           return(<>
//           <div id='card'>
//             <img src={a.image}/> 
//             <p>{a.name}</p>
//             {/* <button onClick={()=>deletee(index)}> DELETE</button> */}
//             </div>
//             </>)
//         })

//       }
//     </div>   
//   )
// }



//managing single input fields and ONCHANGE
// import React from 'react'
// import { useState } from "react"

// const App = () => {
//   let [input, setInput] = useState("")
//   let [data, setData] = useState([])
//   function fun1(e) {
//     // console.log(e.target.value);
//     setInput(e.target.value)
//   }
//   function done() {
//     setData([...data, input])
//   }
//   function d(id) {
//     let filteredData= data.filter((a, b) => {
//       return (b != id)
//     })
//     setData(filteredData)
//   }
//   return (<>
//     <input onChange={fun1} />
//     <button onClick={done}>clickkk</button>
//     {/* <h1>{input}</h1> */}
//     {
//       data.map((a, idx) => {
//         return (<>
//           <h2>{a}</h2>
//           <button onClick={() => d(idx)}> delete</button>
//         </>)
//       })
//     }
//   </>)
// }



// //managing multiple input fields and onchage
// import React from "react"
// import { useState } from "react"

// const App = () => {
//   let [data, setData] = useState({
//     name: "",
//     email: "",
//     passWord: ""
//   })


//   function fun1(e) {
//     // console.log(e.target.value)
//     let { name, value } = e.target
//     setData({ ...data, [name]: value })
//     console.log(data)
//   }

//   let [show, setShow] = useState({})
//   function fun2() {
//     setShow({ ...data })
//     console.log(show)
//   }

//   return (<>
//     <input name="name" value={data.name} type="text" placeholder="type your name" onChange={fun1} /><br /> <hr />
//     <input name="email" value={data.email} type="email" placeholder="type your email" onChange={fun1} /><br /> <hr />
//     <input name="passWord" value={data.passWord} type="password" placeholder="type your password" onChange={fun1} /><br /> <hr />
//     <button onClick={fun2}>CLICK</button>
//     <h2>{show.name}<br/>{show.email}<br/>{show.passWord}</h2>
//   </>)
// }



// import React from "react"
// import {Routes, Route } from 'react-router-dom';
// import './App.css';
// import Login from './login.jsx'
// import Signup from './signup.jsx'

// const App = () => {
//   return (<>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="Signup/" element={<Signup />} />
//     <Route path="Login/" element={<Login />} />
//   </Routes>
//   </>)
// }
// export default App




import React from 'react'
import Home from './Home'
import AddToCart from './AddToCart.jsx'
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AddToCart />} />

      </Routes>
    </div>
  )
}

export default App