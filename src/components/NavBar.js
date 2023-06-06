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
        {!isUserLoggedIn ? 
            <Link to="/LogIn">Log In</Link> : null}
            &nbsp; | &nbsp;
            {!isUserLoggedIn ? 
            <Link to="/SignUp">Sign Up</Link> : null}
            &nbsp; | &nbsp;
        

        {/* <Link to="/books/:id">BOOK</Link> */}
        &nbsp; | &nbsp;
        {isUserLoggedIn ? 
        <Logout 
                isUserLoggedIn={isUserLoggedIn}
                setIsUserLoggedIn={setIsUserLoggedIn}
                />
        : null} 
        &nbsp; | &nbsp;

        </div>
    )
}