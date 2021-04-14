import './App.css';
import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import Homepage from './Components/Homepage/Homepage';
import Moviepage from './Components/Moviepage/Moviepage';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
    <div>
          <Navbar />
          <Switch>
          <Route exact path="/">{Homepage}</Route>
          <Route path="/Moviepage">{Moviepage}</Route>
          </Switch>
    </div>
    </Router>
  )
}

export default App

