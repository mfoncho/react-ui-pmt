import {IndexRoute} from "react-router";
import BaseModule from '../../basecomponents/BaseModule';
import DashBoard from "./pages/Dashbord";

export default class DashboardModule extends BaseModule{
    constructor(){
        super();

        this.key = "XFTS3";

		this.name = "Dashbord";

		this.icon = "desktop";

		this.url = "/";

		this.description = "";       

		this.version = "0.0.1";
        
    }


    render(){

        const { key } = this;
        return  (<IndexRoute component={DashBoard} key={key}/>)
          
    }
    
}