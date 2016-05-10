"use strict"

import Link 			from "./components/Link"
import Navbar 			from "./components/Navbar";
import Sidenav 			from "./components/Sidenav";
import BaseComponent 	from "./basecomponents/BaseComponent";


export default class Layout extends BaseComponent{

	get menu(){

		const linkType = "simple left";

        return this.props.route.links.map((link, index)=>{

        	link.type = linkType;
            return (

            		<Link key={index} {...link} anchorClass={"item"}/>
            
            	);

        });

        
    }
  
  	render() {
  		const {menu, props, baseColor} = this;

  		const color =  "white";

        const theme = "ui vertical left  thin menu visible sidebar";

  		const {children} = props;

	    return (
	    			/* 
	    				<Navbar/> renders from class Navbar
	    				<Sidenav/> renders from class Sidenav 
	    				
	    				-----------------------------------------
	    				|		|			Navbar				|
	    				|Sidenav|_______________________________|
	    				|		|		Main content			|
	    				|		|	  	container				|
	    				|		|								|
	    				|		|								|
	    				|		|								|
	    				-----------------------------------------
	    			*/

	    		<div class="ui bottom attached segment pushable"> 
	    		
	    			
	    			<Sidenav  className={theme} color={color}>
	    				{menu}
	    			</Sidenav>

	    			<div class="pusher pushable main app container">
	    					
						  	{children}

					</div>
	    		</div>
	    	);
  }
  
}