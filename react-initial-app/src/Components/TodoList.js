import { useState } from "react";

function TodoList(){
    const[lists,setLists]=useState([]);
    const[count,setCount]=useState(1);
    const updateList=()=>{
        const addItems="Item : "+count;
        setLists(prevState=>[...prevState,addItems]);
        setCount(prevState=>prevState+1);
    }
    console.log(lists)
    return(
        <>
            <button onClick={updateList}>Add Items</button>
            <ul>
                {lists.map((el,index)=>{ return <li index={index}>{el}</li> })}

            </ul>
        </> 
        
    )
}
export default TodoList;