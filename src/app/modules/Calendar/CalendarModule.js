
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index"
import React from "react";

export default class CalendarModule extends BaseModule {
	constructor(){
		super();

		this.key = "";

		this.name = "Calendar";

		this.icon = "calendar";

		this.url = "/calendar";

		this.description = "";

		this.author = "Mfoncho";

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
