import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate=useNavigate();
    return(
        <>
            <h2>Login</h2>
            <button onClick={()=>navigate('/auth/dashboard')}>Sign in</button>
        </>
    )
}