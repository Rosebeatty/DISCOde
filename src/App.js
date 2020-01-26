import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/:id" component={UserPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
