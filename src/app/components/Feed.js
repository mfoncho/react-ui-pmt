import BaseComponent from "../basecomponents/BaseComponent";
import FeedEvent from "../components/Feedevent";

export default class Feed extends BaseComponent {
	constructor(){
		super();
		const events = [];
		this.state = {events}
	}

	addEvent(event, postion){
		const {events} = this.state;
		switch(postion){
			case "front":{
				events.unshift(event);
			}
			case "end" :{
				event.push(event);
			}
		}
		
		this.setState({events});
	}

	componentWillMount() {
		const {events, className} = this.props;
		this.state = {events, className};
	}


	componentWillUnmount() {
	
	}

    get events(){
    	const events = this.state.events.map((event, key)=>{
    		return (<FeedEvent key={key} event={event}/>);
    	});

    	return events;  
    }


    get className(){
    	return this.state.className
    }



	render() {
		const {className, events} = this;

		return (
				<div className={className}>
					{events}
				</div>
		);
	}
}
