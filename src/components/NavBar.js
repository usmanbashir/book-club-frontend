import { Link } from "react-router-dom";
import "../App.css"
import Logout from "./Logout";

export default function NavBar(props) {

    const {isUserLoggedIn, setIsUserLoggedIn} = props;

    return (
        <div className="NavBar">
        &nbsp; | &nbsp;
        <Link to="/Home">Home</Link>
        &nbsp; | &nbsp;
        <div className="LogInBtn">
           {!localStorage.getItem("token") ? 
            <Link to="/LogIn">Log In</Link> 
            : null} 
        </div>
        <div className="SignUpBtn">
            {!localStorage.getItem("token") ? 
            <Link to="/SignUp">Sign Up</Link>
            : null}
        </div>

        

        {/* <Link to="/books/:id">BOOK</Link> */}
        &nbsp; | &nbsp;
        {localStorage.getItem("token") ? 
        <Logout 
            isUserLoggedIn={isUserLoggedIn}
            setIsUserLoggedIn={setIsUserLoggedIn}
        />
        : null} 
        &nbsp; | &nbsp;

        </div>
    )
}