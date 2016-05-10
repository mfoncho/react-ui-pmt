import BaseComponent from "../../../basecomponents/BaseComponent";
import GroupCard from "../components/Groupcard";

export default class GroupList extends BaseComponent {
	constructor(){
		super();
	}
	
	get groupCards(){
		return [{id:0, color_code:"black", name:"ME GROUP", coordinator:{name:"Akonumbo Mfoncho", avatar_url:"http://semantic-ui.com/images/avatar2/small/matthew.png"}, teams: 5, members: 10, projects: 10, tickets: 5, priority:"NONE"}].map((group, key)=>{
			return <GroupCard key={key} group={group}/>;
		});
	}
	render() {
		const {groupCards} = this;

		return (
					<div class="ui grid container">

	                    <div class="sixteen wide column">
	                   			{groupCards}
	                    </div>

	                </div>
		);
	}
}
