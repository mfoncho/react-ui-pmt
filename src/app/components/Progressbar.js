import BaseComponent from "../basecomponents/BaseComponent";


export default class ProgressBar extends BaseComponent {
	constructor(){
		super();

		this.interval  = null;
	}



	componentDidMount() {
		this.updateBar();
		
	}

	updateBar(){
		const {component, progress} = this;
		component.progress({percent:progress});
	}


	
	componentDidUpdate(prevProps, prevState) {
		this.updateBar();
	}


	get children(){
		return this.props.children;
	}

	get lazy(){
		return true//this.props.lazy;
	}

	get className(){
		return this.props.className;
	}

	get progress(){
		return this.props.progress;
	}



	render() {
		const {children, className, progress} = this;

		switch(this.props.type){

			default:
				return (
							<div className={className} data-percent={progress}>
							  	<div class="bar"></div>
							  	{children}
							</div>
						);

		}
	}
}