import BaseComponent from "../../../basecomponents/BaseComponent";
import AvatarItem from "../../../components/Avataritem"

export default class TicketCard extends BaseComponent {

	get titleRow(){
		const {name, status} = this.props.ticket;
		return (
						<div class="four column row">
	                            <div class="left floated twelve wide column">
	                                <h3 class="ui header">{name}</h3>
	                            </div>

	                            <div class="column">
	                                
	                                <div class="ui orange horizontal label">
	                                    {status}
	                                </div>
	                                
	                            </div>
	                        </div>
			   );
	}

	get infoRow(){
		const {code, issued_to, last_update} = this.props.ticket;
		return (
						<div class="three column row">
                            <div class="left floated column">
                                <h5 class="centered ui header">
                                      TICKET CODE
                                    <div class="sub header">
                                        {code}
                                    </div>
                                </h5>
                            </div>

                            <div class="centered floated column">
                                <h5 class="centered ui header">

                                      ISSUED TO
                                    <div class="sub header">
                                        {issued_to}
                                    </div>
                                </h5>
                            </div>

                            <div class="right floated column">
                                <h5 class="centered ui header">

                                      LAST UPDATE
                                    <div class="sub header">
                                        {last_update}
                                    </div>
                                </h5>
                            </div>
                        </div>
			   );
	}

	get updatesRow(){
		const {opened_by, updated_by} = this.props.ticket;
		const avatarClass = "ui mini circular image";

		return (
						<div class="row">
                            <div class="sixteen wide column">

                                <div class="ui horizontal list">

                                    <AvatarItem padFirst={true} avatarUrl={opened_by.avatar_url} avatarClass={avatarClass}>
                                        <div class="ui sub header">OPENED BY</div>
                                           {opened_by.name}
                                    </AvatarItem>

                                    <AvatarItem  avatarUrl={updated_by.avatar_url} avatarClass={avatarClass}>
                                        <div class="ui sub header">UPDATED BY</div>
                                            {updated_by.name}
                                    </AvatarItem>

                                </div>

                            </div>
                        </div>

			   );
	}


	render() {

		const {titleRow, infoRow,  updatesRow} = this;
		return (
					<div class="column">
	                    <div class= "ui grid segment container">

	                    	{titleRow}
	                        
	                        {infoRow}

	                        {updatesRow}

	                    </div>
	                </div>
		);
	}
}
