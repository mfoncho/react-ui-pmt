
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index";
import React from "react";

export default class Eventmodule extends BaseModule {
	constructor(){
		super();

		this.key = "event";

		this.name = "Events";

		this.icon = "announcement";

		this.url = "/events";

		this.description = "";

		this.autor = "Mfoncho che";

		this.version = "0.0.1";
	}

	render() {

		const {key, url} = this;
		return (
				<Route path={url} key={key}>
					<IndexRoute component={Index}/>
				</Route>
		);
	}
}
