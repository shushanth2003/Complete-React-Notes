import { useState } from "react"

function Form(){
    const [name,setName]=useState();
    console.log("Current State "+name);
    return(
        <>
            <form>
                <label> Enter the name : <input type="text" onChange={(e)=>{setName(e.target.value)}} /></label>
            </form>
        </>
    )
};

export default Form;