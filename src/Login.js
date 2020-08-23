import React, { useState } from 'react'
import './login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './Firebase'
function Login() {
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const history = useHistory()
        const login = (event) => {
            event.preventDefault() // stop refresh
            auth
            .signInWithEmailAndPassword(email,password).then((auth) =>{
                //logged in //redirect to homepage
                history.push("/")
            })
            .catch((e) => alert(e.message))
        }
        const register = (event) => {
            event.preventDefault() // stop refresh
            //LOGIN LOGIC
            auth.
            createUserWithEmailAndPassword(email,password).then((auth) =>{
                //created a //redirect to homepage
                history.push("/")
            })
            .catch((e) => alert(e.message))
        }
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login_logo"
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""
                >
                </img>
            </Link>
            <div className="login_container">
                <h8 style={{fontSize:'30px',marginBottom:'12px'}}>Login</h8>
                <form>
                    <h5>Email</h5>
                    <input value={email} type="email"
                    onChange={event=>setEmail(event.target.value)}
                    ></input>
                    <h5>Password</h5>
                    <input value={password} type="password"
                    onChange={event=>setPassword(event.target.value)}
                    ></input> 
                    <button value={password} onClick={login} type="submit" className="btn" >Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register}  className="btn" style={{backgroundColor:'lightgray',borderColor:'darkgray'}}>Create your Amazon account</button>
            </div>
        </div>
    )
    
}
export default Login
