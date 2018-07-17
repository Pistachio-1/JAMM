import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import OurMission from './components/OurMission';
import About from './components/About';
import Navbar from './components/PetNavbar';
import Doggy from './components/doggy';



class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={OurMission} />
        <Route path="/ourmission" component={OurMission} />
        <Route path="/about" component={About} />
        <Route path="/doggy" component={Doggy} />
      </div> 
    </Router>
    );
  }
}

export default App;
