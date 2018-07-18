import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Doggy from './components/Doggy';
import Navbar from './components/Navbar';
import Login from "./components/Login"
import About from './pages/About';
import AdditionGame from "./pages/AdditionGame"
<<<<<<< HEAD
import pets from "./pets.json"
import buyPetsCard from "./pages/buypets"

=======
import Home from "./pages/Home"
>>>>>>> origin/master



class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/doggy" component={Doggy} />
<<<<<<< HEAD
        <Route path="/additiongame" component={AdditionGame} />
        <Route path="/buypet" component={buyPetsCard} />
=======
        <Route path="/login" component={Login} />
        <Route path="/home"  component={Home} />
>>>>>>> origin/master
      </div> 
    </Router>
    );
  }
}

export default App;
