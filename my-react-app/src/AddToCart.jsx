import React, { useContext } from 'react'
import Context from './context'

const AddToCart = () => {
  let {state ,dispatch} =    useContext(Context)
  console.log(state.cart,"hehehe");
  
  return (
    <div>  
        {
            state.cart.map((a)=>{
                return (<>
                <div id='card'> 
                   
            <p>{a.name}</p>
            <p> Rating: {a.rating}</p>
         <button  onClick={()=> SetCart([...cart,a])}>add </button>
         </div>
                </>)

            })
        }
        </div>
  )
}

export default AddToCart