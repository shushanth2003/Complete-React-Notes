import { useState } from "react";
import styles from'../Components/Header.css'
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
             <div className={styles.container}>
                <h1 className={styles.title}>Guess the number between 1 to 10</h1>
      <input
        type="number"
        className={styles.input}
        onChange={handleChange}
        value={inputNumber}
      />
      <br />
      <button className={styles.button} onClick={handleSubmit}>Check</button>
      <p className={styles.result}>Your guess is: {result}</p>
    </div>
        </>
    )
}
export default GuessNumber;