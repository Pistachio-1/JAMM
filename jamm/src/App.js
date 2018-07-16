import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="card">
      <div className="img-container">
        <img alt="dog" src="./public/images/dog.png" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Type of Pet:</strong> Dog
          </li>
          <li>
            <strong>Description:</strong> Good Dog
          </li>
          <button type="button" class="btn btn-dark" value="400">Buy Pet for 400 coins</button>
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
