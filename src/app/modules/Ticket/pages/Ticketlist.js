
import BaseComponent from "../../../basecomponents/BaseComponent";
import Sidenav from "../../../components/Sidenav";
import Link from "../../../components/Link"
import Icon from "../../../components/Icon";
import AvatarItem from "../../../components/Avataritem"
import Button from "../../../components/Button"
import TicketCard from "../components/Ticketcard"


export default class TicketList extends BaseComponent {
    constructor(){
        super();

        this.state = {tickets:[
            {
                name:"WEB DEV UI BUG",
                status: "OPEN",
                code:"564KYH647",
                issued_to:"WEB DEV TEAM",
                last_update:"5 days ago",
                opened_by:{name:"BIH AKONUMBO", avatar_url:"http://semantic-ui.com/images/avatar2/small/matthew.png"},
                updated_by:{name:"BIH AKONUMBO", avatar_url:"http://semantic-ui.com/images/avatar2/small/matthew.png"},
            },

        ]};
        
    }

    get ticketCards(){
        const {tickets} = this.state;
        return tickets.map((ticket, key)=>{

           return (<TicketCard ticket={ticket} key={key}/>);
        })
    }


    render(){

        const {baseColor, ticketCards} = this;
        const className = "ui vertical  left inverted menu visible sidebar";
        const ComposeBtnClsName = "fluid ui buttonfluid ui button inverted " + baseColor;



        return(
           
            <div class="ui two column grid mail stackable">

                {ticketCards}

            </div>
          );
    }
}