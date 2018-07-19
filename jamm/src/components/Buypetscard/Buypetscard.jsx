import React, { Component } from "react";
import './Buypetscard.css';


export default class Buypetscard extends Component {
  render() {
    return (
      <div class="buyCards">
        <div className="card">
          <div className="img-container">
            <img src={this.props.data.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Type of Pet:</strong> {this.props.data.type}
              </li>
              <li>
                <strong>Description:</strong> {this.props.data.description}
              </li>
              <button type="button" class="btn btn-warning" value={this.props.data.worth}>Buy Pet for {this.props.data.worth} coins</button>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}


