import './App.css';
import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import Homepage from './Components/Homepage/Homepage';
import Moviepage from './Components/Moviepage/Moviepage';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      {/* <Homepage /> */}
      <Router>
     
          {/* <img src={Logo} alt='logo' /> */}

          <Link to='/'>Home</Link>

          <Link to='/Moviepage'>Movies</Link>

          <Navbar />

          <Route exact path="/" component={Homepage} />
          <Route exact path="/Moviepage" component={Moviepage} />      
      </Router>


    </div>
  )
}

export default App

