import React from "react";
import Nav from '../../components/Naviagtion/Navigation'

export default function About() {

    return (
        <div>
            <div className="nav-holder">
                <Nav />
            </div>
            <div className="heading">
                <h1>This is the about page</h1>
            </div>
            <div className="content">
                <p>This is the About page.
                    This is a chat application that was
                    created with react. It was pretty
                    fun to build and I learned a ton
                    along the way.
                </p>
            </div>
        </div>
    );
}