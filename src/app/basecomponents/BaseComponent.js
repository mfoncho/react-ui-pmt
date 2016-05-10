import React from "react";
import ReactDOM from "react-dom";
import {hashHistory} from "react-router";

export default class BaseComponent extends React.Component {
	constructor(){
		super()
		this.initCount = 1;
		this.baseColor = "blue";
		this.Html5Link = false;
	}

	concat(){
        let string = "";
        for (let str of arguments){
            string += str + " "
        }
        return string;
    }

    
    subscribe(subscription){
    	console.log(this.initCount++)
    }

    get component (){
        
        return $(ReactDOM.findDOMNode(this));
    }

    pass(){
        
    }
    
}

