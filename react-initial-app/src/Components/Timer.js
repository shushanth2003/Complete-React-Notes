import { useEffect, useState } from "react";

function Timer(){
    const [count,setCount]=useState(1);
    useEffect(()=>{
        console.log("Screen Rendering")
        // checkCount();
        setInterval(()=>{
            return(
                setCount((previousState)=>
                    {
                        return(previousState+1);

                    })
            )
        },1000)
    },[])
    const updateCount=()=>{
        setCount((prevState)=>{
            return(
                prevState+1
            )
        });
    }
    // function checkCount(){
    //     if(count>10){
    //            setCount(1); 
    //         }
    // }
    return(
        <>
            <h1>I have rendering the {count} Pages </h1>
            <button onClick={updateCount}>Increase the count</button>
        </>
    )
}
export default Timer;