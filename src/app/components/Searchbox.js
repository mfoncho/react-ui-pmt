import BaseComponent from "../basecomponents/BaseComponent";

export default class Searchbox extends BaseComponent {
	render() {
	
		const defaultValue = this.props.defaultValue

        const placeholder = this.props.placeholder || "";

        const onChange = this.props.onChange;

        const loading = this.props.loading ? "loading" : "";

        const className = this.concat(this.props.className, loading);




	    return (

                <div className={className}>
                        <div class="ui icon input">
                            <input 
                                class="prompt" 
                                type="text" 
                                onChange={onChange}
                                defaultValue={defaultValue} 
                                placeholder={placeholder}/>


                            <i class="search icon"></i>
                        </div>
                </div>
	    );
	          
	}
	
}
