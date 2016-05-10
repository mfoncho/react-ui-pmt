import BaseComponent from "../../../basecomponents/BaseComponent";

export default class Mailview extends BaseComponent {
	render() {
		return (
			<div class="ui items">
			  	<div class="item">
			    	<div class="ui avatar mail image">
			      		<img src="http://lorempixel.com/200/200/"/>
			    	</div>

			    	<div class="content">
			      		<div class="header">{this.props.params.id}</div>
			      		<div class="meta">
			        		<span class="price">$1200</span>
			        		<span class="stay">1 Month</span>
			      		</div>
			      		<div class="description">
			        		<p></p>
			      		</div>
			   	 	</div>
				</div>
			</div>
		);
	}
}
