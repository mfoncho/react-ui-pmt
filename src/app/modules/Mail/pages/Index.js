
import BaseComponent from "../../../basecomponents/BaseComponent";
import Sidenav from "../../../components/Sidenav";
import Link from "../../../components/Link"
import Icon from "../../../components/Icon";
import Button from "../../../components/Button"

export default class Index extends BaseComponent {
    constructor(){
        super();
        
    }

  

    render(){
        const {props, baseColor, children} = this;
        const className = "ui vertical  left inverted menu visible sidebar";
        const ComposeBtnClsName = "fluid ui buttonfluid ui button inverted " + this.baseColor;



        return(
           
            <div class="ui bottom attached segment pushable">

                <Sidenav className={className} color={"black"}>
                    <div class="ui inverted segment">
                        <Button className={ComposeBtnClsName}>
                            <Icon className="write icon"/>
                            Compose
                        </Button>
                    </div>
                    <Link 
                        url="/mail/inbox" 
                        name="inbox" 
                        anchorClass="item" 
                        icon="inbox icon" 
                        type="labeled" 
                        labelClass="ui red label" 
                        label="1">
                        Inbox
                    </Link>

                    <Link 
                        url="/mail/sent"  
                        anchorClass="item" 
                        icon="mail outline icon">
                        Sent
                    </Link>

                    <Link 
                        url="/mail/outbox"  
                        anchorClass="item" 
                        icon="mail square icon">
                        Outbox
                    </Link>

                    <Link 
                        url="/mail/draft"  
                        anchorClass="item" 
                        icon="mail icon">
                        Draft
                    </Link>


                    <Link 
                        url="/mail/trash"  
                        anchorClass="item" 
                        icon="trash icon">
                        Trash
                    </Link>

                </Sidenav>

                

                <div class="ui pusher pushable mail">
                    
                        {props.children}
                    
                </div>

            </div>
          );
    }
}