import React from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'

const Login = () => {
    let [data, setData] = useState({
        email: "",
        passWord: ""
    })


    function fun1(e) {
        // console.log(e.target.value)
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        console.log(data)
    }

    let [show, setShow] = useState({})
    function fun2() {
        setShow({ ...data })
        console.log(show)
    }

    return (<>
        <fildset>
            <legend>Login Form</legend>
           <input name="email" value={data.email} type="email" placeholder="type your email" onChange={fun1} /><br /> <hr />
            <input name="passWord" value={data.passWord} type="password" placeholder="type your password" onChange={fun1} /><br /> <hr />
            <button onClick={fun2}>CLICK</button>
        </fildset>
        <h2>{show.email}<br />{show.passWord}</h2>
        <link to="{'/signup'}">
        <button> SIGNUP</button></link>
    </>)
}
export default Login;