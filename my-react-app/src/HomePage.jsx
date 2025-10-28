// import react, { useEffect } from 'react'

// function HomePage() {
//     let[apiRecipe, setApiRecipe]=useState()
//     useEffect(() => {
//         fetch("https://dummyjson.com/recipes").then((res) => { return res.json() }).then((data) => {
//             console.log(data.recipes);
//             setApiRecipe(data.recipes)
//         })
//     })

//     return (<>

//     </>)
// }
// export default HomePage;

// import React from 'react'
// import { useState } from 'react'
// const HomePage = () => {
//     let[bgcolor,setbgcolor]=useState("red")
//     function fun1(){
//         setbgcolor("green")
//     }
//   return (
//     <div style={bgcolor}>

//       <button onClick={fun1}>Click</button>
//     </div>
//   )
// }

// export default HomePage


 //   let[count, SetCount]=useState(0)
    //   setInterval(()=>{
    //     SetCount(new Date().toLocaleTimeString())
    //   })
    //   return(<>
    //   <div>
    //     <h2>{count}</h2>
    //   </div>

    //   </>)
import React, { useState, useEffect } from "react"
const HomePage = () => {
   
    let [time, SetTime] = useState(0)
    function startTimer() {
        useEffect(() => {
            let interval = setInterval(() => {
                SetTime(time + 1)
            }, 1000)
        })
    }
    function stopTimer() {
        SetTime(time)
    }
        return (<>
            <h2>Timer: {time} sec</h2>

            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
        </>)

    
}
export default HomePage