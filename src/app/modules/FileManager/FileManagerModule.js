
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index"
import React from "react";

export default class FileManagerModule extends BaseModule {
	constructor(){
		super();

		this.key = "File Manager";

		this.name = "Files";

		this.icon = "folder";

		this.url = "/files";

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
