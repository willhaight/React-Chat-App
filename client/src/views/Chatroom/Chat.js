import React from "react";
import Nav from '../../components/Naviagtion/Navigation'
import '../Chatroom/Chat.css'
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
                <div className="messageBoard">
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adip</p>

                </div>
                <div className="controlCenter">
                    <input type="text" id="chatValue" placeholder="write a message..."></input>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}