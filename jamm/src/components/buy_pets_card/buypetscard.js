import React from "react";

const buyPetsCard = props => (
    <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Type of Pet:</strong> {props.type}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <button type="button" class="btn btn-dark" value={props.worth}>Buy Pet for {props.worth}</button>
      </ul>
    </div>
  </div>
);

export default buyPetsCard;