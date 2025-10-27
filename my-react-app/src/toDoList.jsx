import react from 'react';
import { useState } from 'react';

function ToDoList() {
    let [input, setInput] = useState('')

    function fun1(e) {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    let [data,setData]=useState([])
    function btn() {
setData([...data, input])
    }
    return (<>
        <input onChange={fun1} type="text" placeholder="enter your task" />
        <button onClick={btn}> ADD</button>
        {
            data.map((a)=>{
                return(<>
                <li>{a}</li>
                </>)
            })
        }
    </>)
}
export default ToDoList;