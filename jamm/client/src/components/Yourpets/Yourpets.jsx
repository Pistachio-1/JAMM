import React, { Component } from "react";
import './Yourpets.css';
import Doggy from "../Doggy";


export default class Yourpets extends Component {
    render() {
        return (
            <div class="buyCards">
            <div className="card">
              <div className="img-container">
                <img src={this.props.data.image} alt="pet" />
              </div>
              <div className="content">
                <ul>
                  <li>
                    <strong>Name:</strong> {this.props.data.name}  
                  </li>  
                  <li>
                    <strong>Type of Pet:</strong> {this.props.data.type}
                  </li>
                  <li>
                    <strong>Description:</strong> {this.props.data.description}
                  </li>
                  <button type="button" className="btn btn-warning buyButton">Feed</button>
                  <button type="button" className="btn btn-warning buyButton">Play With</button>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}