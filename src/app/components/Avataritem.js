import BaseComponent from "../basecomponents/BaseComponent";

export default class AvatarItem extends BaseComponent {
	render() {

		const {avatarClass, children, avatarUrl, padFirst} = this.props;
		const paddingClass = padFirst ? "item pad first" : "item"

		return (
					<div className={paddingClass}>
				    	<img className={avatarClass} src={avatarUrl}/>
				    	<div class="content">
				     	 	{children}
				    	</div>
				  	</div>
		);
	}
}
