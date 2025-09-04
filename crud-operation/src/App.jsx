import { EditableText } from "@blueprintjs/core";
import { useEffect } from "react";
import { useState } from "react"

function App() {
  const [user,setUser]=useState([]);
  const [newname,setNewname]=useState("");
  const [newemail,setNewemail]=useState("");
  const [newwebsite,setNewwebsite]=useState("");
  const [message, setMessage] = useState(null); // alert message
  const [type, setType] = useState("success");
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
function showAlert(msg, t = "success") {
    setMessage(msg);
    setType(t);
    setTimeout(() => setMessage(null), 2500); // auto-hide after 2.5s
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
        showAlert("User Added Successfully ✅", "success");
        setNewname("")
        setNewemail("")
        setNewwebsite("")
      }).catch(() => showAlert("Failed to add user ❌", "error"));
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
        showAlert("User Updated Successfully ✨", "success");
        setUser(user.map(u => (u.id === id ? updatedUser : u)));
        
      }).catch(() => showAlert("Failed to update user ❌", "error"));
    
}
}
function deleteUser(id){
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"DELETE",
      }).then((response)=>{
        if(response.ok){
          setUser(users=>users.filter(u=>u.id!==id));
          showAlert("User Deleted Successfully 🗑️", "success");
        }else {
        showAlert("Failed to delete user ❌", "error");
        }
      })
}
   return (
    <>
      {/* Tailwind Alert */}
      {message && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded-lg shadow-lg text-white font-medium transition-opacity duration-500
            ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {message}
        </div>
      )}

      <div className="p-6">
        <table className="w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Website</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">
                  <EditableText
                    value={user.email}
                    onChange={(newValue) =>
                      handleUpdate(user.id, "email", newValue)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <EditableText
                    value={user.website}
                    onChange={(newValue) =>
                      handleUpdate(user.id, "website", newValue)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => updateUser(user.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md transition-all duration-200 mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-md transition-all duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <td></td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="newname"
                  onChange={(e) => setNewname(e.target.value)}
                  placeholder="Enter the name"
                  value={newname}
                  className="border px-2 py-1 rounded-lg w-full"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="newemail"
                  onChange={(e) => setNewemail(e.target.value)}
                  placeholder="Enter the email"
                  value={newemail}
                  className="border px-2 py-1 rounded-lg w-full"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="newwebsite"
                  onChange={(e) => setNewwebsite(e.target.value)}
                  placeholder="Enter the website"
                  value={newwebsite}
                  className="border px-2 py-1 rounded-lg w-full"
                />
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={addUser}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
                >
                  Add User
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      
    </>
  )
}

export default App;
