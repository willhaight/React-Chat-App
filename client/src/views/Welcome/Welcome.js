import React from 'react';
import Nav from '../../components/Naviagtion/Navigation'
import '../Welcome/Welcome.css'

import './Welcome.css';

export default function Welcome() {


  return (
    <div>
      <div className="nav-holder">
        <Nav />
      </div>
      <div className="heading">
        <h1>Welcome to the app</h1>
      </div>
      <div className="content">
        <p>
          Login and start chatting!
        </p>
      </div>
    </div>
  );
}
