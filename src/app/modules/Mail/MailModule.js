import {IndexRoute, Route} from "react-router";
import BaseModule from "../../basecomponents/BaseModule";
import Mailview from "./components/Mailview"
import Mailtable from "./components/Mailtable"
import Index from "./pages/Index"


export default class MailModule extends BaseModule {
    constructor(){
        super();

        this.key = "XFTS2";

        this.name = "Mail";

        this.icon = "mail";

        this.url = "/mail/inbox";

        this.description = "";
        

        this.version = "0.0.1";
        
    }

  

    render(){
        const {key, props, baseColor} = this;
        const className = "ui vertical  left inverted menu visible sidebar";
        const ComposeBtnClsName = "fluid ui buttonfluid ui button inverted " + baseColor;


        return(
           
                    <Route path="mail" component={Index} key={key}>

                        <Route path="/mail/sent">
                            <IndexRoute component={Mailtable}/>
                            <Route path="/mail/sent/:id" component={Mailview}/>
                        </Route>

                        <Route path="/mail/draft">
                            <IndexRoute component={Mailtable}/>
                            <Route path="/mail/draft/:id" component={Mailview}/>
                        </Route>

                        <Route path="/mail/trash">
                            <IndexRoute component={Mailtable}/>
                            <Route path="/mail/trash/:id" component={Mailview}/>
                        </Route>

                        <Route path="/mail/inbox">
                            <IndexRoute component={Mailtable}/>
                            <Route path="/mail/inbox/:id" component={Mailview}/>
                        </Route>

                        <Route path="/mail/outbox">
                            <IndexRoute component={Mailtable}/>
                            <Route path="/mail/outbox/:id" component={Mailview}/>
                        </Route>

                        <Route path="compose" component={Index}/>

                    </Route>
          );
    }
}