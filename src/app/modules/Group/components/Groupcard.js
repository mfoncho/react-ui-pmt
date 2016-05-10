import BaseComponent from "../../../basecomponents/BaseComponent";
import AvatarItem from "../../../components/Avataritem"
import ProgressBar from "../../../components/progressbar";


export default class GroupCard extends BaseComponent {
	constructor (){
		super();
	}


	get titleRow (){

		const {	name } = this.props.group;

		return (
					<div class="row">
					    <div class="left floated column">
					    	<h3 class="ui header">{name}</h3>
					    </div>
					</div>
				);

	}

	get infoRow () {

		const {coordinator, teams, members} = this.props.group

		const avatarClass = "ui mini circular image";

		const padFirst = false;

		return (
					<div class="three column row">
					
						<div class="left floated six wide column">

							<div class="ui horizontal list">

							  	<AvatarItem padFirst={padFirst} avatarUrl={coordinator.avatar_url} avatarClass={avatarClass}>
					     	 		<div class="ui sub header">{coordinator.name}</div>
					      				COORDINATOR
					  			</AvatarItem>

							</div>

						</div>

						<div class="right floated five wide column">
					    	<h5 class="centered ui header">
					    		TEAMS
					    		<div class="sub header">

					    			{teams}

					    		</div>
					    	</h5>
					    </div>

					    <div class="right floated five wide column">
					    	<h5 class="centered ui header">
					    		MEMBERS
					    		<div class="sub header">

					    			{members}

					    		</div>
					    	</h5>
					    </div>

					</div>
				);
	}

	get statusRow () {
	
			const {projects, tickets, priority} = this.props.group;
			
			return (
						<div class="three column row">
					
							<div class="left floated column">
						    	<h5 class="centered ui header">
						    		PROJETS
						    		<div class="sub header">

						    			{projects}

						    		</div>
						    	</h5>
						    </div>

							<div class="centered floated column">
						    	<h5 class="centered ui header">
						    		TICKETS
						    		<div class="sub header">

						    			{tickets}

						    		</div>
						    	</h5>
						    </div>

						    <div class="right floated column">
						    	<h5 class="centered ui header">
						    		PRIORITY
						    		<div class="sub header">

						    			{priority}

						    		</div>
						    	</h5>
						    </div>

						</div>
	
					);
	}
	

	get link () {
		return this.concat("/#/group/",this.props.group.id);
	}

	get cellClass () {

		return this.concat("ui grid segment ", this.props.group.color_code);
	}


	render() {


		const { titleRow,  infoRow , statusRow, link, cellClass} = this;

		return (

				<a className={cellClass} href={link}>

					{titleRow}

					{infoRow}

					{statusRow}

				</a>
		);
	}
}
