import BaseComponent from "../basecomponents/BaseComponent";

export default class Button extends BaseComponent {
	render() {
		const className = this.props.className;
		switch(this.props.type){

			default:
				return (<button className={className}> {this.props.children}</button>);

		}
	}
}
