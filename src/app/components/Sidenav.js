import BaseComponent from "../basecomponents/BaseComponent";
import Link from "./Link"

export default class Sidenav extends BaseComponent{
    constructor(){
        super();
        this.menuLinks = [];
        this.search = {direction : null};
        this.class = "ui vertical left labeled thin icon inverted menu visible sidebar";
 
    } 
 

    render() {
        const color = this.props.color || this.baseColor;
        const _class = this.props.className || this.class;
        const className = this.concat(_class, color);
        
        return ( 
            <div className={className}>
                {this.props.children}
            </div>
    		
		);
  }
  
}
