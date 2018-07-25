import React from "react";
import Yourpets from "../Yourpets";
import Pets from "../../ownedpetssample.json";
import "./buycard.css"

var titleStyle = {
    color: "white",
    align: "center",
}

var linkStyle = {
    color: "#F1AA45"
}

const YourPetsView = () => (
    <div>
    <div className="col-md-4">
    <h1 style={titleStyle}> Your Pets </h1>
    </div>
    <div className="col-md-4"></div>
    <div className="col-md-4">
    <h1 style={titleStyle}> Pets Owned: 2</h1>
    <a style={linkStyle} href="/buypet"> Buy More Pets!</a>
    </div>
    <div className="container scroll">
    {Pets.map(x => {
    return <Yourpets data = {x} key={x.created} />;
})}
    </div>
    </div>
)

export default YourPetsView;