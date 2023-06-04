import { Link } from "react-router-dom";
import "../App.css"

export default function NavBar() {

    return (
        <div className="NavBar">
        &nbsp; | &nbsp;
        <Link to="/Home">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/LogIn">Log In</Link>
        &nbsp; | &nbsp;
        <Link to="/SignUp">Sign Up</Link>
        &nbsp; | &nbsp;
        <Link to="/vip">VIP</Link>
        &nbsp; | &nbsp;
        {/* <Link to="/books/:id">BOOK</Link> */}
        &nbsp; | &nbsp;
        </div>
    )
}