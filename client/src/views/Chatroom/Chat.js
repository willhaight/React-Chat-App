import React from "react";
import Nav from '../../components/Naviagtion/Navigation'

export default function Chat() {


    return (
        <div>
            <div className="nav-holder">
                <Nav />
            </div>
            <div className="heading">
                <h1>Welcome to the Chatroom</h1>
            </div>
            <div className="content">
                <p>This is the Chat</p>
            </div>
        </div>
    );
}