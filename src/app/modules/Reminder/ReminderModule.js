
import BaseModule from '../../basecomponents/BaseModule';
import {Route, IndexRoute} from "react-router";
import Index from "./pages/Index"
import React from "react";

export default class ReminderModule extends BaseModule {
	constructor(){
		super();

		this.key = "reminderKEY";

		this.name = "Reminder";

		this.icon = "alarm";

		this.url = "/reminder";

		this.description = "";

		this.autor = "Mfoncho Che";

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
