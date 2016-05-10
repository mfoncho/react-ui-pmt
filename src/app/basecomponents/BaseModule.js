

export default class BaseModule {

	constructor(){

	}

	get __route__ ()
	{
		return this.render();
	}

	get __link__()
	{
		const {name, icon, url} = this
		return {name, icon, url};
	}

}
