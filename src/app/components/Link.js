import BaseComponent from "../basecomponents/BaseComponent";

export default class Link extends BaseComponent {
	render() {
		const {name, url, label, icon, labelClass, anchorClass, type} = this.props;
		const uri = this.html5Link ? (url) : ("#"+url);
		let iconClass = icon ? this.concat(icon, "icon") : "";
		

		switch(type){



			case "labeled":{
				return(
					<a className={anchorClass} href={uri}> 
						<div className={labelClass}>	
		                	<i className={iconClass}></i>
		                	{label} 
		                </div>
		                  	{this.props.children}
						
		            </a>
				);
			}


			case "simple left":{

				iconClass = this.concat(iconClass, "simple left");

				return(
					<a className={anchorClass} href={uri}> 

		                <i className={iconClass}></i> 

		                  	{name} 
		                  	{this.props.children}
		            </a>
				);
			}


			case "simple right":{

				iconClass = this.concat(iconClass, "simple right");

				return(
					<a className={anchorClass} href={uri}> 

		                <i className={iconClass}></i> 

		                  	{name} 
		                  	{this.props.children}
		            </a>
				);
			}


			default:{
				return(
					<a className={anchorClass} href={uri}> 

		                <i className={iconClass}></i> 

		                  	{name} 
		                  	{this.props.children}
		            </a>
        		)
			}
		}
		
	}
}
