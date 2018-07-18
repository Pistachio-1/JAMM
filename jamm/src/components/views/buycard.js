import React, { Component } from "react";
import Buypetscard from "../Buypetscard";
import Pets from "../../pets.json";

const BuyPetsView = () => (
    <div> 
        {Pets.map(x => {
        return <Buypetscard data = {x} key={x.toJS().created} />;
    })}
    </div>
);

export default BuyPetsView;