import React, { Component } from "react";
import Buypetscard from "../Buypetscard";
import Pets from "../../pets.json";
import "./buycard.css"

var divStyle = {
    color: "white",
    width: 600
}

var containerStyle = {
    display: "inline-flex",
    overflow: "scroll",
}

var titleStyle = {
    color: "white",
    align: "center",
}

const BuyPetsView = () => (
        <div>
        <div className="col-md-4">
        <h1 style={titleStyle}> Buy A Pet </h1>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <h1 style={titleStyle}> Coins: </h1>
        <a href="/AdditionGame"> Make more coins!</a>
        </div>
        <div className="container scroll">
        {Pets.map(x => {
        return <Buypetscard data = {x} key={x.created} />;
    })}
        </div>
        </div>
);

export default BuyPetsView;