import { useParams } from "react-router-dom";

function User2(){
    const {id}=useParams();
    return(
        <>
            <h1>User Profile</h1>
            <p>User ID  is <b>{id}</b></p>
        </>
    )
}

export default User2;