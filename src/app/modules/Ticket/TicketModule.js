
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Layout from "./pages/Layout";
import TicketList from "./pages/TicketList";
import React from "react";

export default class TicketModule extends BaseModule {
	constructor(){
		super();

		this.key = "tickets";

		this.name = "Tickets";

		this.icon = "ticket";

		this.url = "/tickets";

		this.description = "";

		this.autor = "Mfoncho che";

		this.version = "0.0.1";
	}
	settings(){
		
	}
	render() {

		const {key, url} = this;
		return (
				<Route path={url} key={key} component={Layout}>
					<IndexRoute component={TicketList}/>
				</Route>
		);
	}
}
