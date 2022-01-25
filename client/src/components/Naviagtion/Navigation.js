import React from "react";
import { Link } from 'react-router-dom'
import '../Naviagtion/Navigation.css'

const Nav = function () {

    return (
        <div className="Navigation">
            <Link to={`/`}><p>Home</p></Link>
            <Link to={`/login`}><p>Login</p></Link>
            <Link to={`/about`}><p>About</p></Link>
        </div>
    )
}

export default Nav