import BaseComponent from "../basecomponents/BaseComponent";

export default class FeedEvent extends BaseComponent {

	constructor(){
		super();
	}

	render() {

		const {username, subject, time, text, likes, unlikes, liked, unliked } = this.props.event

		const likedClass = liked ? "thumbs up icon " + this.baseColor :"thumbs up icon";

		const unlikedClass = unliked ? "thumbs down  icon " + this.baseColor :"thumbs down icon";

		return (
				<div class="event">

			    	<div class="label">
			      		<img src="http://semantic-ui.com/images/avatar2/small/eve.png"/>
			    	</div>

			    	<div class="content">

				      	<div class="summary">
				        	<a>{username}</a> {subject}
				        	<div class="date">
				          		{time}
				        	</div>
				      	</div>

			      		<div class="extra text">
			        		{text}
			      		</div>

			      		<div class="meta">
			        		<a class="like">
			          			<i className={likedClass}></i> {likes}
			        		</a>
			        		<a class="like">
			          			<i className={unlikedClass}></i> {unlikes}
			        		</a>
			      		</div>

			    	</div>

			  	</div>
		);
	}
}
