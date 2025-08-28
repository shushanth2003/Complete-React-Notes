import Car from './Car.js'
import Apple from './Apple.js';
function Garbage(){
    const carInfo={
        brand:"Ford",
        color:"Red Color"
    }
    return (
        <>
            <h1>Car is parked near by Garbage</h1>
            <Car carInfo={carInfo}/>
            <Apple/>
        </>
    )
}
export default Garbage;