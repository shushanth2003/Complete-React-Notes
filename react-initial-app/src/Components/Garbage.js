import Car from './Car.js'
import Apple from './Apple.js';
function Garbage(){
    // const carInfo={
    //     brand:"Ford",
    //     color:"Red Color"
    // }
    const carInfo={};
    const appleInfo={
        type:"Fufi",
        color:"Red"
    }
    return (
        <>
            <h1>Car is parked near by Garbage</h1>
            {
                carInfo.brand!==undefined && carInfo.color!==undefined ? <Car carInfo={carInfo}/>:null
            }
            <Apple appleInfo={appleInfo}/>
        </>
    )
}
export default Garbage;