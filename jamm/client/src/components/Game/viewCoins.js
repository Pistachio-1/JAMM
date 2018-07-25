import React, { PureComponent } from 'react';
import axios from "axios";

class Coins extends PureComponent {
    viewCoins = () => {
        axios.get("/api/learners/coins/")
          .then(function (response) {
            const displayCoins = response.data.coins
            console.log(displayCoins)
          })
      }
    
    render() {
      return (
        <div className="coins">
            {this.displayCoins}
        </div>
      );
    }
  } 

export default Coins;