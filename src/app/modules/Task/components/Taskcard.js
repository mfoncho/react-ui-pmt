import BaseComponent from "../../../basecomponents/BaseComponent";
import ProgressBar from "../../../components/progressbar";

export default class TaskCard extends BaseComponent {
	constructor(){
		super();
		this.state = {task:{}};
	}

	get titleRow(){
		const {name, time_left} = this.state.task;

		return (
						<div class="ui two column row">

	                            <div class="left floated twelve wide column">
	                                <h3 class="ui header">{name}</h3>
	                            </div>

	                            <div class="right floated four wide column">
	                                <h4 class="right aligned ui header">{time_left}</h4>
	                            </div>
                        </div>

			);

	}


	get infoRow(){
		const {assigned_to, last_update, phase} = this.state.task
		
		return (
					<div class="ui three column row">

                        <div class="left floated column">
                            <h5 class="ui header">
                                  ASSIGNED
                                <div class="sub header">
                                    {assigned_to}
                                </div>
                            </h5>
                        </div>

                        <div class="centered floated column">
                            <h5 class="centered ui header">

                                  PHASE
                                <div class="sub header">
                                    {phase}
                                </div>
                            </h5>
                        </div>


                        <div class="right floated column">
                            <h5 class="right aligned ui header">
                                  UPDATED
                                <div class="sub header">
                                   {last_update}
                                </div>
                            </h5>
                        </div>

                    </div>

				);
		
	}



	get progressRow(){

			const {progress} = this.state.task;
			const className = "ui tiny indicating progress";
			
			const progressBar = {progress, className};

			return (
						<div class="ui row">

                            <div class="sixteen wide column">
                               
                               <ProgressBar {...progressBar}>
                                    <div class="label">{progress}% complete</div>
                               </ProgressBar>

                            </div>

                        </div>
					);

	}

	get colorCode (){

	 		const {color_code} = this.state.task;

	 		return this.concat("ui grid segment", color_code);
	}

	get url (){

	 		return "#/task/"+this.state.task.id;
	}



	componentWillMount() {
		this.state.task = this.props.task;
	}


	render() {
		const {titleRow, infoRow, progressRow, colorCode, url} = this;

		return (
					<a href={url} class="column">

	            		<div className={colorCode}>

	                        {titleRow}

	                        {infoRow}

	                        {progressRow}
	                                                

	                    </div>

	            	</a>	
		);
	}
}
