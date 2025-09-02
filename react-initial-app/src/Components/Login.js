import { useState } from "react";

function Login(){
    const[input,setInput]=useState({phoneno:"+91",gmail:"@gmail.com"});
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
                <label>Enter the Email : <input type="text" name="gmail" onChange={onSubmit} value={input.gmail}/></label><br />
                <label>Enter the Password : <input type="text" name="password" onChange={onSubmit} /></label><br />
                <label>Enter the FullName : <input type="text" name="fullname" onChange={onSubmit} /></label><br />
                <label>Enter the Phone Number : <input type="text" name="phoneno" onChange={onSubmit} value={input.phoneno}/></label> <br />
                <label>Enter the country  : <select name="country" onChange={onSubmit} value={input.country}>
                        <option value="India" selected>India</option>
                        <option value="Austrilia">Austrilia</option>
                        <option value="Indonesia">Indonesia</option>
                    </select></label> <br />
                <label>About me : <textarea name="about" onChange={onSubmit}></textarea></label><br />
                <input type="submit" value="File Submitted" />
            </form>
        </>
    )
}

export default Login;