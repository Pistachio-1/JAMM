import React, { Component } from 'react';
import './App.css';
import pets from 'pets.json';
import buyPetsCard from './components/buy_pets_card'

class App extends Component {
  render() {
    return (
      <buyPetsCard />
    )
  }
}

export default App;
