
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Layout from "./pages/Layout"
import TeamList from "./pages/Teamlist"
import React from "react";

export default class TeamModule extends BaseModule {
	constructor(){
		super();

		this.key = "teams";

		this.name = "Teams";

		this.icon = "cubes";

		this.url = "/teams";

		this.description = "";

		this.autor = "Mfoncho";

		this.version = "0.0.1";
	}

	render() {

		const {key, url} = this;
		return (
				<Route path={url} key={key} component={Layout}>
					<IndexRoute component={TeamList}/>
				</Route>
		);
	}
}
