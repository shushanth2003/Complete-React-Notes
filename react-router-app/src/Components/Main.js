import { Link } from "react-router-dom";

function Main(){
    return(
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/User1/1">User1</Link></li>
                <li><Link to="/User2/2">User2</Link></li>
                <li><Link to="/book/oldbook">Oldbook</Link></li>
                <li><Link to="/book/newbook">Newbook</Link></li>
                <li><Link to="/auth/login">Login</Link></li>
            </ul>
        </>
    )
}

export default Main;