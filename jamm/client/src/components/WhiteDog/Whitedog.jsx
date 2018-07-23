import React, { Component } from "react";
import "./Whitedog.scss"

export default class Whitedog extends Component {
    render() {
        return (
            <div className = "whitedoggo">
                <div className="whitedog">
                    <div className="whitedog-body">
                        <div className="whitedog-tail">
                            <div className="whitedog-tail">
                                <div className="whitedog-tail">
                                    <div className="whitedog-tail">
                                        <div className="whitedog-tail">
                                            <div className="whitedog-tail">
                                                <div className="whitedog-tail">
                                                    <div className="whitedog-tail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whitedog-torso"></div>
                    <div className="whitedog-head">
                        <div className="whitedog-ears">
                            <div className="whitedog-ear"></div>
                            <div className="whitedog-ear"></div>
                        </div>
                        <div className="whitedog-eyes">
                            <div className="whitedog-eye"></div>
                            <div className="whitedog-eye"></div>
                        </div>
                        <div className="whitedog-muzzle">
                            <div className="whitedog-tongue"></div>
                        </div>
                    </div>
                </div>

            <div className="whiteball" tabindex="0"></div> 
        </div>
        )
    }
}