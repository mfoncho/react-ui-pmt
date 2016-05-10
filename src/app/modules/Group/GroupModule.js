
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index";
import GroupView from "./pages/Groupview";
import GroupList from "./pages/Grouplist";
import React from "react";

export default class GroupModule extends BaseModule {
	constructor(){
		super();

		this.key = "groups";

		this.name = "Groups";

		this.icon = "cube";

		this.url = "/group";

		this.description = "";

		this.autor = "Mfoncho";

		this.version = "0.0.1";
	}

	render() {

		const {key, url} = this;
		return (
				<Route path={url} key={key} component={Index}>
					<IndexRoute component={GroupList}/>
					<Route path="/group/:id" component={GroupView}/>
				</Route>
		);
	}
}
