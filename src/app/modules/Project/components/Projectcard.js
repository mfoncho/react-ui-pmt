import BaseComponent from "../../../basecomponents/BaseComponent";
import AvatarItem from "../../../components/Avataritem"
import ProgressBar from "../../../components/progressbar";

/*

card props interface
	{
		project:{
					name
					time
					brief_description
					phase
					updated_at
					assigned_to
					percentage_done
					aproval{avata_url, by}
					status
					moderators[{username, avatar_url, role}]

					
				}
	}

 */

export default class ProjectCard extends BaseComponent {
	constructor (){
		super();
	}


	get titleRow (){

		const {	name, time_left, due } = this.props.project;

		const pastDue = due ? "PAST DUE" : ""

		return (
					<div class="three column row">
					    <div class="left floated eight wide column">
					    	<h3 class="ui header">{name}</h3>
					    </div>

					    <div class="left floated four wide column">
					    	<h5 class="centered ui red header">{pastDue}</h5>
					    </div>

					    <div class="right floated four wide column">
					    	<h5 class="right aligned ui header">{time_left}</h5>
					    </div>
					</div>
				);

	}

	get infoRow (){

		const { brief_description, phase, updated_at, assigned_to} = this.props.project;

		return (

					<div class="five column row">
					    <div class="left floated column">
					    	<h5 class="centered ui header">
					    		BRIEF DESCRIPTION
					    		<div class="sub header">
					    			{brief_description} lorem ipsum to be done  by sunday
					    			lorem 
					    		</div>
					    	</h5>
					    </div>

					    <div class="right floated column">
					    	<h5 class="centered ui header">
					    		PHASE

					    		<div class="sub header">{phase}</div>
					    	</h5>
					    </div>

					    <div class="right floated column">
					    	<h5 class="centered ui header">
					    		UPDATED

					    		<div class="sub header">{updated_at}</div>
					    	</h5>
					    </div>

					    <div class="right floated column">
					    	<h5 class="centered ui header">
					    		ASSIGNED

					    		<div class="sub header">{assigned_to }</div>
					    	</h5>
					    </div>
					</div>					
				);

	}

	get statusRow () {
	
			const {progress} = this.props.project;
			const progressbarClass = "ui small progress indicating";
			let currentState;
	
			if(this.props.project.approved)
			{
				const { by, avatar_url } = this.props.project.approval;
	 
				currentState =  (
									
							    	<div class="ui green image label">
							    		<img src={avatar_url}/>
												{by}
											<div class="detail">Approved</div>
									</div>
								    
					   			);
				
			}
	
	
			else
			{
				const {status} = this.props.project;
	
				let statusClass
	
				switch(status)
				{
					case "IN PROGRESS":
							statusClass = " ui blue label ";
							break;
	
					case "PENDING":
							statusClass = " ui yellow label ";
							break;
	
					case "HOLD":
							statusClass = " ui orange label ";
							break;
	
					case "SUSPENDED":
							statusClass = " ui red label ";
							break;
	
					case "INACTIVE":
							statusClass = " ui grey label ";
							break;
	
					default:
							statusClass = " ui olive label ";
							break;
				}
	
				currentState =  (
									
							    	<div className={statusClass}>												
											<div class="detail">{status}</div>
									</div>
								    
								);
				
			}
	
			return (
						<div class="row">									    
						    <div class="eight wide column left floated">
	
						    	<ProgressBar className={progressbarClass} progress={progress}>
								  	<div class="label">{progress}% Complete</div>
								</ProgressBar>
	
						    </div>
						    <div class="five wide column right floated">
						    	{currentState}
						    </div>
						</div>
	
					);
	}
	

	get moderatorsRow () {

		const avatarClass = "ui mini circular image";

		const padFirst = this.props.project.moderators.length > 3;

		const avataItems = this.props.project.moderators.map((moderator, key)=>{

			const {username, avatar_url, role} = moderator;

			return (
						<AvatarItem padFirst={padFirst} avatarUrl={avatar_url} avatarClass={avatarClass} key={key}>
					     	 	<div class="ui sub header">{username}</div>
					      		{role}
					  	</AvatarItem>
					)
		})

		return (
					<div class="row">
					
						<div class="sixteen wide column">

							<div class="ui horizontal list">

							  	{avataItems}

							</div>

						</div>

					</div>
				);
	}

	get link () {
		return this.concat("/#/project/",this.props.project.id);
	}

	get cellClass () {

		return this.concat("ui grid segment ", this.props.project.color_code);
	}


	render() {


		const { titleRow, statusRow, infoRow , moderatorsRow, link, cellClass} = this;

		return (

				<a className={cellClass} href={link}>

					{titleRow}

					{infoRow}

					{statusRow}

					{moderatorsRow}

				</a>
		);
	}
}
