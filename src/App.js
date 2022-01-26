import React from 'react';

import Login from './views/Login/Login';
import Join from './views/Welcome/Welcome';
import Chatroom from './views/Chatroom/Chat';
import About from './views/About/About';
import SignUp from './views/signUp/SignUp';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/chat" component={Chatroom} />
      <Route path="/About" component={About} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
