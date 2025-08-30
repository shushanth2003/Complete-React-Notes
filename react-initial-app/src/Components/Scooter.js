import { useState } from "react"

function Scooter(){
    const [scooter,setScooter]=useState({
        color:"red",
        brand:"Honda",
        Model:"Activa 4G",
        year:2023
    })
    const updateScooter=()=>{
        setScooter((previousState)=>({
            ...previousState,color:"blue"
        }));
    }
    console.log("current state",scooter.brand);
    return (
        <>
            <h1>My Scooter</h1>
            <h2>Color: {scooter.color}</h2>
            <h3>Brand : {scooter.brand}</h3>
            <h3>Model : {scooter.Model}</h3>
            <h3>Year : {scooter.year}</h3>
            <button onClick={updateScooter}>Update</button>
        </>
    )
}

export default Scooter;