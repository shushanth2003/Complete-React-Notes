import { useState } from "react";
function GuessNumber(){
    const[inputNumber,setInputNumber]=useState(0);
    const [result,setResult]=useState("");
    function handleChange(e){
        setInputNumber(Number(e.target.value))
    }
    function handleSubmit(){
        const guessNumber=7;
        if(inputNumber===guessNumber){
            setResult("Yigee Correct");
        }else if(inputNumber<=guessNumber){
            setResult("Lower")
        }else{
            setResult("Higher")
        }
    }
     console.log("Passing result : "+result);
    return(
        <>
            <h1>Guess the number between 1 to 10</h1><br />
            <input type="number" name="inputNumber" onChange={handleChange} value={inputNumber}/><br />
            <button onClick={handleSubmit}>check</button><br />
            <p>Your guess is <span name="result">{result}</span></p>
        </>
    )
}
export default GuessNumber;