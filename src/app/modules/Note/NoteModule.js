
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index"
import React from "react";

export default class NoteModule extends BaseModule {
	constructor(){
		
		super();

		this.key = "notes";

		this.name = "Notes";

		this.icon = "fa fa-sticky-note";

		this.url = "/notes";

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
