
import BaseComponent from "../../../basecomponents/BaseComponent";
import Sidenav from "../../../components/Sidenav";
import Feed from "../../../components/Feed";
import Button from "../../../components/Button"
import Link from "../../../components/Link"
import Icon from "../../../components/Icon";
import ProjectCard from "../components/Projectcard";



export default class Index extends BaseComponent {
    constructor(){
        super();
        const name = "";
        const projects = [];
        const feedEvents = [];

        this.state = {projects, feedEvents}
    }

    console(){
    	console.log("hi")
    }

    get projectCards(){
    	const projects = this.state.projects.map((project, key)=>{

    		return <ProjectCard project={project} key={key}/>;
    	});

    	return projects;
    }

    componentWillMount() {
    	const projects = [{
    						id:1,
    						color_code: "orange",
    						name:"ACHEMON WORKS",
    						brief_description:"lorem if (true) {}",
    						phase:"Development",
    						moderators:[{username:"Mfoncho", role:"Cordinator", avatar_url:"http://semantic-ui.com/images/avatar2/small/matthew.png"}],
    						time_left: "5 hrs past",
    						progress: 90,
    						due: false,
    						approved:true,
    						approval:{by:"Mfoncho", avatar_url:"http://semantic-ui.com/images/avatar2/small/matthew.png"}
    						}];

    	this.setState({projects});
    }


    render(){


    	const sideNavClass = "ui vertical very wide inverted menu left visible sidebar";
        const sideNavColor = "black";

        const feedClassName = "ui feed inverted segment "+this.baseColor+"icon";

        const {projectCards} = this;

        const feedEvents = [{username:"mfoncho", subject:"sematic", time:"2 day ago", text:"tryout event", likes:50, unlikes:30, unliked:true }];

        return(       		

	             <div class="ui bottom attached segment pushable">

	                <Sidenav className={sideNavClass} color={sideNavColor}>


  
					  	<Feed className={feedClassName} events={feedEvents}>

					  	</Feed>
						  
						

	                </Sidenav>

                

	                <div class="ui pusher pushable very wide content scroll-y auto">


	                    <div class="ui grid container">

	                    	<div class="sixteen wide column">
	                    	
								
	                    		{ projectCards }	


	                    	</div>


	                    </div>
	                       
	                    
	                </div>

            	</div>
          );
    }
}