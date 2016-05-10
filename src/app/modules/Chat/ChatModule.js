
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index"
import React from "react";

export default class ChatModule extends BaseModule {
	constructor(){
		super();

		this.key = "chat";

		this.name = "Chat";

		this.icon = "chat";

		this.url = "/chat";

		this.description = "";

		this.autor = "";

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
