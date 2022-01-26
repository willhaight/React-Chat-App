import React from 'react';
import Nav from '../../components/Naviagtion/Navigation'
import '../Login/Login.css'
import { projectAuth } from '../../firebase/config'
//import { Link } from 'react-router-dom'



export default function SignIn() {

    async function login() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        let nextUrl = document.location.origin + '/chat'

        console.log(email, password)
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            console.log(res.user.email)
            document.location.href = nextUrl
        }
        catch (err) {

            console.log(err.message)


        }
    }






    return (
        <div>
            <div className="nav-holder">
                <Nav />
            </div>
            <div className="heading">
                <h1>Sign In Here</h1>
            </div>
            <div className="content">
                <div className="sign-in-form">
                    <label>Email</label>
                    <input type="email" placeholder='Email' id="email"></input>
                    <label>Password</label>
                    <input type="password" placeholder='Password' id="password"></input>

                    <button onClick={login}>Enter Chat</button>

                </div>
            </div>
        </div>
    );
}
