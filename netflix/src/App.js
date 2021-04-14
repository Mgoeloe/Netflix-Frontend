import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import Homepage from './Components/Homepage/Homepage';
import Moviepage from './Components/Moviepage/Moviepage';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div>

        <Navbar />
        <Switch>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/Moviepage" component={Moviepage} />

        </Switch>

      </div>
    </Router>
  );
};

export default App

