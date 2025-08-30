import react from "react";

class ColorClassComponents extends react.Component{
    constructor(){
        super();
        this.state={color:'red'}
    }
    render(){
        return(
            <>
                <h1>I like to change by {this.state.color}</h1>
                <button onClick={()=>{this.setState({color:'blue'})}}>change the button</button>
            </>
        )
    }
}

export default ColorClassComponents;