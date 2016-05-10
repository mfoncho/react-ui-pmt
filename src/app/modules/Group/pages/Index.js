import BaseComponent from "../../../basecomponents/BaseComponent";
import Sidenav from "../../../components/Sidenav";
import Feed from "../../../components/Feed";

export default class Index extends BaseComponent {
	constructor(){
		super();
	}

	get children(){
		return this.props.children;
	}

	get sideNavClass(){
		return "ui vertical very wide inverted menu left visible sidebar";
	}

	render() {
		const {children, baseColor, sideNavClass} = this;
		const sideNavColor = "black";
		const feedClassName = this.concat("ui feed inverted segment",this.baseColor+"icon");
		return (
				 
				<div class="ui bottom attached segment pushable">
					<Sidenav className={sideNavClass} color={sideNavColor}>


  
					  	<Feed className={feedClassName} events={[]}>

					  	</Feed>
						  
						

	                </Sidenav>

	                <div class="ui pusher pushable very wide content scroll-y auto">


	                   
	                    	
								
	                 	{ children }	


	               
	                    
	                </div>
	            </div>
		);
	}
}
