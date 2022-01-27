import React from "react";
import Nav from '../../components/Naviagtion/Navigation'
import '../Chatroom/Chat.css'
import { projectFirestore } from "../../firebase/config";
import { projectAuth } from "../../firebase/config";
import { timestamp } from "../../firebase/config";


export default function Chat() {

    //pull messages and append
    const update = async () => {

        projectFirestore.collection("messages")
            .orderBy("time", "desc")
            .onSnapshot((res) => {
                document.getElementById('messageBoard').innerHTML = null
                res.docs.forEach(doc => {

                    document.getElementById('messageBoard').innerHTML += `<p>` + doc.data().author + `: ` + doc.data().wrote + `</p>`
                })
            });



    }
    update()


    //write message
    const writeMessage = async () => {
        if (!projectAuth.currentUser) {
            document.location.href = document.location.origin + "/login"
        }
        let writer = projectAuth.currentUser.email
        let message = { wrote: document.getElementById('chatValue').value, author: writer, time: timestamp() }


        try {
            await projectFirestore.collection('messages').add(message)
            projectFirestore.collection('messages').orderBy('time')
            document.getElementById('chatValue').value = null
            update()
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <div className="nav-holder">
                <Nav />
            </div>
            <div className="heading">
                <h1>Welcome to the Chatroom</h1>
            </div>
            <div className="content">
                <div id="messageBoard">


                </div>
                <div className="controlCenter">
                    <input type="text" id="chatValue" placeholder="write a message..."></input>
                    <button onClick={writeMessage}>Send</button>

                </div>
            </div>
        </div>
    );
}