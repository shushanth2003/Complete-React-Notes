import Car from './Car.js'
import Apple from './Apple.js';
function Garbage(){
    const carInfo={
    }
    const carList=[
        {brand:"Ford",color:"Red Color"},
        {brand:"Ferrari",color:"Black Color"},
        {brand:"Maruthi Suzhui", color:"White"}
    ];
    // const carInfo={};
    const appleInfo={
        type:"Fufi",
        color:"Red"
    }
    const carDataTransfer=carList.map((car,index)=>{
        return(
            <li key={index}>
                <Car carInfo={car}/>
            </li>
        )
        
});
    const doorIsOpened=false;
    return (
        <>
            {doorIsOpened?<h1>Garbage is opened</h1>:<h1>Garbage is closed</h1>}
            {
                carList.length>0 ? carDataTransfer:"Not Found"
            }
            <Apple appleInfo={appleInfo}/>
            
        </>
    )
}
export default Garbage;