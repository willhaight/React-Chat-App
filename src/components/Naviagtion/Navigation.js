import React from "react";
import { Link } from 'react-router-dom'
import '../Naviagtion/Navigation.css'
import { projectAuth } from "../../firebase/config";

const Nav = function () {

    return (
        <div className="Navigation">
            <Link to={`/`}><p>Home</p></Link>
            <Link to={`/about`}><p>About</p></Link>
            <Link to={`/signup`}><p>Sign Up</p></Link>
            <Link to={`/login`}><p>Login</p></Link>
            <div className="btns">
                <button className="navBTN" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

const logout = async () => {
    let nextUrl = document.location.origin + '/login'



    try {
        await projectAuth.signOut()
        document.location.href = nextUrl

    }
    catch (err) {
        console.log(err.message)

    }
}


export default Nav