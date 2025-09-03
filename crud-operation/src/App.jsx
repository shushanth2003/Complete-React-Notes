import { EditableText } from "@blueprintjs/core";
import { useEffect } from "react";
import { useState } from "react"

function App() {
  const [user,setUser]=useState([]);
  const [newname,setNewname]=useState("");
  const [newemail,setNewemail]=useState("");
  const [newwebsite,setNewwebsite]=useState("");
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((json)=>setUser(json))
  },[])
function handleUpdate(id, field, value) {
  setUser(users =>
    users.map(u =>
      u.id === id ? { ...u, [field]: value } : u
    )
  );
}

  function addUser(){
    const name=newname.trim();
    const email=newemail.trim();
    const website=newwebsite.trim();
    if(name && email && website){
      fetch('https://jsonplaceholder.typicode.com/users',{
        method:"POST",
        body:JSON.stringify({
           name,email,website
        }),
        headers:{
          "Content-Type":"application/json; charset=UTF-8"
        }
      }).then((response)=>response.json())
      .then((data)=>{
        const newUser = { ...data, id: user.length + 1 };
        setUser([...user,newUser]);
        alert("Added SuccessFully");
        setNewname("")
        setNewemail("")
        setNewwebsite("")
      })
    }
  }

  function updateUser(id){
  const name=newname.trim();
    const email=newemail.trim();
    const website=newwebsite.trim();
    if(name && email && website){
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"PUT",
        body:JSON.stringify({
           id,name,email,website
        }),
        headers:{
          "Content-Type":"application/json; charset=UTF-8"
        }
      }).then((response)=>response.json())
      .then((updatedUser)=>{
        alert("updated SuccessFully");
        setUser(user.map(u => (u.id === id ? updatedUser : u)));
        
      })
    
}
}
  return (
    <>
      <table>
        <thead>
          <th>Id</th>
          <th>name</th>
          <th>email</th>
          <th>website</th>
          <th>action</th>
        </thead>
        <tbody>
        {user.map(
        (user)=>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <EditableText
                value={user.email}
                onChange={(newValue) => handleUpdate(user.id, "email", newValue)}
              />
            </td>

          <td>
              <EditableText
                value={user.website}
                onChange={(newValue) => handleUpdate(user.id, "website", newValue)
                }
              />
          </td>

            <td>
              <button onClick={() => updateUser(user.id)}>update</button>
              <button>delete</button>
            </td>
          </tr>
      )} 
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><input type="text" name="newname" onChange={(e)=>setNewname(e.target.value)} placeholder="Enter the name" value={newname}/></td>
            <td><input type="text" name="newemail" onChange={(e)=>setNewemail(e.target.value)} placeholder="Enter the email" value={newemail}/></td>
            <td><input type="text" name="newwebsite" onChange={(e)=>setNewwebsite(e.target.value)} placeholder="Enter the website" value={newwebsite}/></td>
            <td><button onClick={addUser}>Add user</button></td>
          </tr>
        </tfoot>
      </table>
      
    </>
  )
}

export default App;
