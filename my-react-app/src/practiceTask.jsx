import React from 'react'
const Task1 = () => {
    fetch('https://dummyjson.com/products').then((res) => { return res.json() }).then((data) => { console.log(data.products) })
    return(<>
    <input type="text" placeholder="search for product"/> 
    <button>SEARCH</button>
    </>)
}

export default Task1;