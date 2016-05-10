import BaseModule from '../../basecomponents/BaseModule';
import Index from './pages/Index';
import {Route, IndexRoute} from "react-router";
import React from "react";


export default class ProjectModule extends BaseModule {
	
	constructor (){
		super();
		this.key = "XFTS";

		this.name = "Project";

		this.icon = "fa fa-object-group";

		this.url = "/project";

		this.description = "";

		this.autor = "Mfoncho Che";

		this.version = "0.0.1";

	}


	render (){
		const {key, url} = this;
		return  (		
					<Route path={url} key={key}>
			  			<IndexRoute component={Index}/>
			  			<Route path="/project/:id" component={Index}/>
			  			<Route path="/project/new" component={Index}/>
			  			<Route path="/project/edit/:project_id" component={Index}/>
			  		</Route>
			  			 
				);
	}
}
