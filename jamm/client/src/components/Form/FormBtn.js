import React from "react";
import "./form.css"

export const FormBtn = props => (
  <button {...props}  className="btn btn-primary registerBtn">
    {props.children}
  </button>
);