import { useState } from "react"

function Register(){
    const [input,setInput]=useState({});
    const onsubmit=(e)=>{
        e.preventDefault();
        alert("Form Submitted");
        console.log(input.name);
        console.log(input.gmail);
        console.log(input.password)
    }
    return(
        <form onSubmit={onsubmit}>
        <label>Enter the Name : <input type="text" onChange={(e)=>setInput((prevState)=>{return{...prevState,name:e.target.value}})} /></label><br />
        <label>Enter the Gmail : <input type="text" onChange={(e)=>setInput((prevState)=>{return{...prevState,gmail:e.target.value}})} /></label><br />
        <label>Enter the Password : <input type="text" onChange={(e)=>setInput((prevState)=>{return{...prevState,password:e.target.value}})}/></label><br />
        <input type="submit" value="Form Submition" />
        </form>
    )
}

export default Register;