import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Doggy from './components/Doggy';
import Navbar from './components/Navbar';
import Login from "./components/Login"
import About from './pages/About';
import AdditionGame from "./pages/AdditionGame"
import BuyPetsView from "./components/views/buycard"
import Home from "./pages/Home"



class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/doggy" component={Doggy} />
        <Route path="/additiongame" component={AdditionGame} />
        <Route path="/buypet" component={BuyPetsView} />
        <Route path="/login" component={Login} />
        <Route path="/home"  component={Home} />
      </div> 
    </Router>
    );
  }
}

export default App;
