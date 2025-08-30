import react from "react";

class Apple extends react.Component{
    
    render(){
        const{appleInfo}=this.props;
        const {type,color}=appleInfo;
        return(
            <>
                <h1>I m a {type} {color} apple</h1>
            </>
        )
    }
}

export default Apple;