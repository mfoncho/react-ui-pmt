import BaseComponent from "../../../basecomponents/BaseComponent";
import AvatarItem from "../../../components/Avataritem"
import ProgressBar from "../../../components/progressbar";


export default class TeamCard extends BaseComponent {
	constructor (){
		super();
	}


	get titleRow (){

		const {	name } = this.props.team;

		return (
					<div class="row">
					    <div class="left floated column">
					    	<h3 class="ui header">{name}</h3>
					    </div>
					</div>
				);

	}

	get infoRow () {

		const {leader, teams, members} = this.props.team

		const avatarClass = "ui mini circular image";

		const padFirst = false;

		return (
					<div class="two column row">
					
						<div class="left floated six wide column">

							<div class="ui horizontal list">

							  	<AvatarItem padFirst={padFirst} avatarUrl={leader.avatar_url} avatarClass={avatarClass}>
					     	 		<div class="ui sub header">{leader.name}</div>
					      				SUPERVISOR
					  			</AvatarItem>

							</div>

						</div>


						<div class="left floated six wide column">

							<div class="ui horizontal list">

							  	<AvatarItem padFirst={padFirst} avatarUrl={leader.avatar_url} avatarClass={avatarClass}>
					     	 		<div class="ui sub header">{leader.name}</div>
					      				LEADER
					  			</AvatarItem>

							</div>

						</div>


					    <div class="right floated four wide column">
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
	
			const {tasks, tickets, priority} = this.props.team;
			
			return (
						<div class="three column row">
					
							<div class="left floated column">
						    	<h5 class="centered ui header">
						    		TASKS
						    		<div class="sub header">

						    			{tasks}

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
		return this.concat("/#/team/",this.props.team.id);
	}

	get cellClass () {

		return this.concat("ui grid segment ", this.props.team.color_code);
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
