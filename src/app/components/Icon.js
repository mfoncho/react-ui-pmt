import BaseComponent from "../basecomponents/BaseComponent";

export default class Icon extends BaseComponent {
	render() {
		return (
			<i className={this.props.className}>
				{this.props.children}
			</i>
		);
	}
}
