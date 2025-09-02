import { Link } from "react-router-dom";

function Main(){
    return(
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        </>
    )
}

export default Main;