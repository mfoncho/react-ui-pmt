
import BaseComponent from "../../../basecomponents/BaseComponent";
import Sidenav from "../../../components/Sidenav";
import Link from "../../../components/Link"
import Icon from "../../../components/Icon";
import Button from "../../../components/Button"

function timmer(){
	console.log(arguement)
}

export default class Layout extends BaseComponent {
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

                </Sidenav>

                

                <div class="ui pusher pushable scroll-y auto">
                    
                        {props.children}
                    
                </div>

            </div>
          );
    }
}