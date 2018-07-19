import React, { Component } from "react";
import './Buypetscard.css';


export default class Buypetscard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="img-container">
            <img src="https://image.ibb.co/izH2by/dog.png" />
          </div>
            <div className="content">
            <ul>
              <li>
                <strong>Type of Pet:</strong> {this.props.data.type}
        </li>
              <li>
                <strong>Description:</strong> {this.props.data.description}
        </li>
              <button type="button" class="btn btn-info" value="50">Buy Pet for 50</button>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}


