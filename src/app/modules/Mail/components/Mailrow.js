import BaseComponent from "../../../basecomponents/BaseComponent";

export default class MailRow extends BaseComponent {
	constructor(){
		super();

		this.state = {mail:{}};
	}

	toggleProperty(mail, prop, event){

		event.stopPropagation();
		if(mail[prop])
			mail[prop] = false
		else
			mail[prop] = true;

		this.setState( {mail} );
	}

	

	render() {

		const {link, mail, history} = 	this.props;
		const gotoMail 				= 	history.push.bind(this, link);
		const toggleRead 			= 	this.toggleProperty.bind(this, mail, "read");
		const toggleSelected 		= 	this.toggleProperty.bind(this, mail, "selected");	
		const toggleImportant 		= 	this.toggleProperty.bind(this, mail, "important");
		const pass 					= 	this.pass;
		const {prfImg} 				= 	mail;
		const checked 				= 	mail.selected;
		const name 					= 	mail.sender || mail.reciever;
		const color 				= 	mail.read ? "" : this.baseColor;
		const selected 				= 	mail.selected ? "active" : "";		
		const attachment 			= 	mail.attachment ? (color+" attach icon") : "";
		const trashRead 			= 	mail.read ? "trash icon outline" : "trash icon";
		const mailIconRead 			= 	mail.read ? "mail outline icon" : "mail icon";
		const important 			= 	mail.important ? "yellow star icon"  : "empty star icon";
		const readClass 			= 	mail.read ? "left aligned" : "left aligned ui header small";
		const dateRead 				= 	mail.read ? "right aligned" : "right aligned ui header small"
		
		

		return (
					<tr className={selected} onClick={gotoMail}>
			      		<td class="collapsing left aligned">

			      			<div className="ui checkbox">
							  	<input type="checkbox" onChange={pass} onClick={toggleSelected} checked={checked}/>
							  	<label></label>
							</div>

			      		</td>


			      		<td class="collapsing left aligned" onClick={toggleImportant}>
			      			<i className={important}></i>
			      		</td>

			      		<td className={readClass}>
			      			<img class="ui image avatar" src={prfImg}/>
			      			{name}
			      		</td>

			      		<td class="collapsing left aligned" onClick={toggleRead}>
			      			<i className={mailIconRead}></i>
			      		</td>	

			      		<td class="collapsing left aligned">
			      			<i className={trashRead}></i>
			      		</td>

			      		<td className={readClass}>
			      			RE: This is the main reply from the software
			      		</td>

			      		<td class="collapsing right aligned">
			      			<i className={attachment}></i>
			      		</td>

			      		<td className={dateRead}>
			      			Mar 8
			      		</td>

			    	</tr>
		);
	}
}
