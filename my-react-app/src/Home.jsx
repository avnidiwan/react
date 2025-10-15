
import React, { useContext } from 'react'
import Context from './context'
import './App.css'



const Home = () => {
     let {dispatch,state}=   useContext(Context)
    


     console.log(dispatch ,state,"hehehe");
     
  
     
   

  return (
   <>
   {
        state.apiData.map((a,index)=>{
           return(<>
           <div id='card'>
          <img  src={a.image}/>
             <p>{a.name}</p>
            <p> Rating: {a.rating}</p>          <button  onClick={()=> SetCart([...cart,a])}>add </button>
           
          </div>
          </>)
         })
      } 
   </>
  )
}

export default Home