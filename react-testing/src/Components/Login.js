import { useState } from "react";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const signHandler=()=>{
        setMessage("Loading...")
        if(email==="bsshu2003@gmail.com" && password==="BSshu@2003"){
            setTimeout(()=>{
                setMessage("Login SuccessFully");
            },3000)
        }else{
            setTimeout(()=>{
                setMessage("Invalid Credients");
            },3000)
        }
    }
    return(
        <>
            <h1>Login</h1>
            <label>Gmail <input type="text" value='' placeholder="Enter the Gmail" onChange={(e)=>setEmail(e.target.value)}/></label><br />
            <label>Password <input type="password" value='' placeholder="Enter the password" onChange={(e)=>setPassword(e.target.value)}/></label> <br />
            <button onClick={signHandler}>Sign in</button>
            {message&&<p>{message}</p>}
        </>
    )
}

export default Login;