function Car(props){
    const {carInfo}=props;
    const {brand,color}=carInfo;
    return(
        <>
            <h1>Hello Everyone, This is my car</h1>
            <h2>My car color is {color}</h2>
            <h3>My car name is {brand}</h3>
        </>
    )
}

export default Car;