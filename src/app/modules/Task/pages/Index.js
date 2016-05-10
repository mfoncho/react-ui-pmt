
import BaseComponent from "../../../basecomponents/BaseComponent";
import Sidenav from "../../../components/Sidenav";
import Feed from "../../../components/Feed";
import Button from "../../../components/Button"
import Link from "../../../components/Link"
import Icon from "../../../components/Icon";
import TaskCard from "../components/Taskcard"



export default class Index extends BaseComponent {
    constructor(){
        super();

        this.sideNavClass = "ui vertical very wide inverted menu left visible sidebar";

        this.feedClassName = "ui feed inverted segment "+this.baseColor+"icon";

        this.sideNavColor = "black";

        const name = "";

        const tasks = [
            {progress:99, phase:"MODULE", last_update:"5hrs ago",name:"GRP CRD COMPONENT", assigned_to:"JS TEAM", time_left:"5 days", color_code:"black"},
            {progress:90, phase:"CREATION", last_update:"5hrs ago",name:"TEAM CARD COMPONENT", assigned_to:"JS TEAM", time_left:"5 days", color_code:"blue"},
            {progress:90, phase:"MODULE", last_update:"5hrs ago",name:"TICKET CARD COMPONENT", assigned_to:"JS TEAM", time_left:"5 days", color_code:"black"},
            {progress:0, phase:"MODULE", last_update:"5hrs ago",name:"REMINDER COMPONENT", assigned_to:"JS TEAM", time_left:"5 days", color_code:"black"},
            ];

        const feedEvents = [];

        this.state = {tasks, feedEvents}
    }



    get taskCards(){
    	return this.state.tasks.map((task, key)=>{
            task.id = key;
    	    return (<TaskCard task={task} key={key}/>);
    	});

    }

    componentWillMount() {
  
    }


    render(){

        const {taskCards, sideNavClass, feedClassName, sideNavColor } = this;

        const feedEvents = [{username:"mfoncho", subject:"sematic", time:"2 day ago", text:"tryout event", likes:50, unlikes:30, unliked:true }];

        return(       		

	             <div class="ui bottom attached segment pushable">

	                <Sidenav className={sideNavClass} color={sideNavColor}>


  
					  	<Feed className={feedClassName} events={feedEvents}>

					  	</Feed>
						  
						

	                </Sidenav>

                

	                <div class="ui pusher pushable very wide content scroll-y auto">


	                    <div class="ui two column grid container stackable">

	                    	{taskCards}

	                    </div>
	                       
	                    
	                </div>

            	</div>
          );
    }
}