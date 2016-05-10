import BaseComponent from "../../../basecomponents/BaseComponent";
import TeamCard from "../components/Teamcard";

export default class TeamList extends BaseComponent {
	constructor(){
		super();
	}
	
	get teamCards(){
		return [{id:0, color_code:"black", name:"ME TEAM", leader:{name:"Akonumbo Mfoncho", avatar_url:"http://semantic-ui.com/images/avatar2/small/matthew.png"},  members: 10, tasks: 10, tickets: 5, priority:"NONE"}].map((team, key)=>{
			return <TeamCard key={key} team={team}/>;
		});
	}
	render() {
		const {teamCards} = this;

		return (
					<div class="ui grid container">

	                    <div class="sixteen wide column">
	                   			{teamCards}
	                    </div>

	                </div>
		);
	}
}