import BaseComponent from "../basecomponents/BaseComponent";

export class Items extends BaseComponent {
	render() {
		const className = this.props.className;
		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
}
