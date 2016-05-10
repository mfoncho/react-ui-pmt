import BaseComponent from "../../../basecomponents/BaseComponent";
import Searchbox from "../../../components/Searchbox";
import MailRow from "./Mailrow";


export default class Mailtable extends BaseComponent {

	constructor() 
	{
		super();
		this.state = {selectAll: false};
		
	}

	getMails() 
	{
		const NumberofMails = ((window.innerHeight*70/100)*0.02)-3;

		let mails = [{id: 123, selected:false, sender:"Mfoncho Akonumbo", read:true, attachment:true, important:false, prfImg:""},
					 {id: 1234, selected:false, sender:"Che", read:false, attachment:false,  important:true, prfImg:""}];

		return mails;
	}

	getMailRows() 
	{

		const mailCells = this.state.mails.map((mail, index)=>{
			
			const link = this.props.location.pathname + "/" + mail.id;
			const {history} = this.props;
			return (<MailRow history={history} link={link} key={index} mail={mail}/>)
		});


		return mailCells;
	}

	componentWillMount() 
	{
		this.state.mails = this.getMails();
	}


	componentDidMount() 
	{
		
	}


	markSelectedAs(property, state) 
	{

		let {mails} = this.state;
		for(let i=0; i<mails.length;i++)
		{
			if(mails[i].selected)
				mails[i][property] = state;
		}
		this.setState({mails});

	}

	toggleAll() 
	{
		if(this.state.selectAll)
			this.state.selectAll = false;
		else
			this.state.selectAll = true;

		const mails = this.state.mails.map((mail)=>{
			mail.selected = this.state.selectAll;
			return mail;
		});

		this.setState({ mails });
	}






	render() 
	{
		const selectAll 		= 	this.state.selectAll;
		const searchCls 		= 	"ui segment inverted black";
		const theme 			= 	"ui vertical wide left menu visible sidebar inverted grey";
		const className 		= 	"ui item search";	
        const mailRows 			= 	this.getMailRows();
        const toggleAll 		= 	this.toggleAll.bind(this);
        const markRead 			= 	this.markSelectedAs.bind(this, "read", true);    
        const markUnread 		= 	this.markSelectedAs.bind(this, "read", false);
        const markImportant		= 	this.markSelectedAs.bind(this, "important", true);
        const markUnimportant	= 	this.markSelectedAs.bind(this, "important", false);


		return (
			<div class="ui basic segment">
				
 				<div class="ui grid">
				  	<div class="sixteen wide column">
				  	table anem
				  	</div>
				  	<div class="sixteen wide column ui segment">

				  		<table class="ui selectable table">

						  	<thead>
						    	<tr>

						      		<th class="left aligned">

						      			<div class="ui checkbox">
										  	<input type="checkbox" onChange={toggleAll} value={selectAll}/>
										  	<label></label>
										</div>

						      		</th>

						      		<th class="left aligned" colSpan="4">

						      			<button class="ui icon button" onClick={markImportant}>
										  	<i class="star icon"></i>
										</button>

										<button class="ui icon button" onClick={markUnimportant}>
										  	<i class="star empty icon"></i>
										</button>

										<button class="ui icon button" onClick={markUnread}>
										  	<i class="mail icon"></i>
										</button>

										<button class="ui icon button" onClick={markRead}>
										  	<i class="mail outline icon"></i>
										</button>

										<button class="ui icon button">
										  	<i class="trash icon"></i>
										</button>

						      		</th>

						     
						      		
						      		<th class="right aligned" colSpan="3">
						      			<div class="ui left icon input">
										  <input type="text" placeholder="Search mail..."/>
										  <i class="mail icon"></i>
										</div>
						      			
						      		</th>


						    	</tr>
						    </thead>

						  	<tbody>

						    	{mailRows}
						    
						  	</tbody>

						  	<tfoot>
							    <tr>
								    <th colSpan="8">
								      <div class="ui right floated pagination menu">
								        <a class="icon item">
								          	<i class="left chevron icon"></i>
								        </a>
								        <a class="item">1</a>
								        <a class="item">2</a>
								        <a class="item">3</a>
								        <a class="item">4</a>
								        <a class="icon item">
								          <i class="right chevron icon"></i>
								        </a>
								      </div>
								    </th>
							  	</tr>
							</tfoot>

						</table>

				  	</div>

				</div>

            </div>
		);
	}
}
