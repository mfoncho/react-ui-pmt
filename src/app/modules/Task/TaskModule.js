
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import React from "react";
import Index from "./pages/Index"

export default class TaskModule extends BaseModule {
	constructor(){

		super();

		this.key = "task";

		this.name = "Task";

		this.icon = "fa fa-object-ungroup";

		this.url = "/task";

		this.description = "";

		this.autor = "Mfoncho Che";

		this.liscence = "";

		this.version = "";
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
