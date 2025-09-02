import { useState } from "react";

function Login(){
    const[input,setInput]=useState({});
    const onSubmit=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput((prevState)=>{return{...prevState,[name]:value}})
    }
    const onSubmitFile=(e)=>{
        e.preventDefault();
        alert("Application Submitted");
        console.log("current State : ",input)
    }
    return(
        <>
            <form onSubmit={onSubmitFile}>
                <label>Enter the Email : <input type="text" name="gmail" onChange={onSubmit} /></label><br />
                <label>Enter the Password : <input type="text" name="password" onChange={onSubmit} /></label><br />
                <label>Enter the FullName : <input type="text" name="fullname" onChange={onSubmit} /></label><br />
                <input type="submit" value="File Submitted" />
            </form>
        </>
    )
}

export default Login;