import React from "react";



export default class Modal extends React.PureComponent {
    state =  {isShowing: false}

    toggle = (e) => { //toggle the state to be open
        
    }
    render() {
       


        return(
            <div>
            <button>Click Me</button>
            <Modal 
            hidden={true}/>
            </div>
        );
    }
}        
