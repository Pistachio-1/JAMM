import React, { Component } from "react";
import './Buypetscard.css';




export default class Buypetscard extends Component {
  render() {
    function handleClick(e) {
      console.log(this);
      alert("this dog costs ") 
    }
    return (
      <div class="buyCards">
        <div className="card">
          <div className="img-container">
            <img src={this.props.data.image} alt="pet" />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Type of Pet:</strong> {this.props.data.type}
              </li>
              <li>
                <strong>Description:</strong> {this.props.data.description}
              </li>
              <button type="button" className="btn btn-warning buyButton" value={this.props.data.worth} onClick={handleClick}>Buy Pet for {this.props.data.worth} coins</button>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}




