
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index"
import React from "react";

export default class UserModule extends BaseModule {
	constructor(){
		
		super();

		this.key = "user";

		this.name = ".";

		this.icon = "user";

		this.url = "/user";

		this.description = "";

		this.autor = "Mfoncho";

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
