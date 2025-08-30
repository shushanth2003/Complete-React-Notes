import { useState } from "react"

function Favoritecar(){
    const[car,setCar]=useState("Toyato");
    return(
        <>
            <h1>My Favourite Car is {car}</h1>
            <button onClick={()=>setCar("Ford")}>Changing a Car Idea</button>
        </>
    )
}
export default Favoritecar;