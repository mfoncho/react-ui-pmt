

import React from "react";
// import Dashboard from "./pages/Dashboard";
// import Mailpage from "./pages/Mailpage";
// import Taskspage from "./pages/Taskspage";
// import Projectspage from "./pages/Projectspage";
// import Mailtable from "./components/Mailtable";
// import Mailview from "./components/Mailview";
import {Router, Route, hashHistory} from "react-router";
import Layout from "./Layout"
import Modules from "./ModuleLoader"


export default class AppRouter extends React.Component{

	get modules () {
		const links = [];
		const routes = Modules.map((module)=>{
			const {__route__, __link__} =  new module;
			links.push(__link__);
			return __route__;
		});

		return {links, routes};
	}


	render(){
		
		const {routes, links} = this.modules;

		return(



				<Router history={hashHistory}>



				{/*********************************************************/}
			  	{/**************************ROUTE**************************/}
			  	{/*********************************************************/}

				{/*

					Route name 	=> Root
					Companent	=> Dashbord
					Rout URL 	=> "/"
					Description	=> Displays overview of all Projects,
								   Tasks, Mails, Discusions, and
								   Surveys


			  	*/}
			  		
			  		

			  



				  	<Route path="/" component={Layout} links={links}>


				  		{routes}


				  	</Route>
			  		
			  		
			  		
			  	
			  		


			  		
			  	</Router>
	)}
}