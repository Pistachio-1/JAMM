import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Doggy from './components/Doggy';
import LoginForm from './components/forms/LoginForm';
import Home from './components/Home';
import OurMission from './pages/Mission';
import About from './pages/About';
import Navbar from './components/Navbar/PetNavbar';
import AdditionGame from "./pages/AdditionGame"


class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={OurMission} />
        <Route path="/ourmission" component={OurMission} />
        <Route path="/about" component={About} />
        <Route path="/additiongame" component= {AdditionGame}/>
        <Route path="/doggy" component={Doggy} />
        <Route path="/login" component={LoginForm} />
        <Route path="/home"  component={Home} />
      </div> 
    </Router>
    );
  }
}

export default App;
