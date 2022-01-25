import React from 'react';
import Nav from '../../components/Naviagtion/Navigation'
import '../Login/Login.css'
import { Link } from 'react-router-dom'



export default function SignIn() {
    const handleClick = () => {
        console.log('clicked login')
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
                    <label>Name</label>
                    <input type="text" placeholder='Username'></input>
                    <Link to={`/chat`}>
                        <button onClick={handleClick}>Enter Chat</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
