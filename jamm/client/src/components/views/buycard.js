import React from "react";
import Buypetscard from "../Buypetscard";
import Pets from "../../pets.json";
import "./buycard.css";
import axios from "axios";

var titleStyle = {
    color: "white",
    align: "center",
}

var linkStyle = {
    color: "#F1AA45"
}

{axios.get('/ID=1')
.then(function (response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error);
})}


const BuyPetsView = () => (
        <div>
        <div className="col-md-4">
        <h1 style={titleStyle}> Buy A Pet </h1>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <h1 style={titleStyle}> Coins: </h1>
        <a style={linkStyle} href="/AdditionGame"> Make more coins!</a>
        </div>
        <div className="container scroll">
        {Pets.map(x => {
        return <Buypetscard data = {x} key={x.created} />;
    })}
        </div>
        </div>
);

export default BuyPetsView;