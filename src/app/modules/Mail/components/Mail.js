import React from "react";

export default class Mail extends React.Component {
    constructor(){
        super();
    }

    setTemplate(str){
    	return (<div> From setting {str} Templete function </div>);
    }

    render(){
        return(
            <div> From setting Templete function </div>
          );
    }
}