import React, { Component } from "react";
import './buypetscard.css';
import pets from './pets.json';

export default class buyPetsCard extends Component {
  render(props) {
    return (
      <div>
        <div className="card">
          <div className="img-container">
            <img src="https://image.ibb.co/izH2by/dog.png" />
          </div>
            <div className="content">
            <ul>
              <li>
                <strong>Type of Pet:</strong> {props.type}
        </li>
              <li>
                <strong>Description:</strong> Good Dog
        </li>
              <button type="button" class="btn btn-info" value="50">Buy Pet for 50</button>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}


