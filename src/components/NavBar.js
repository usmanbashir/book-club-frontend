import { Link } from "react-router-dom";
import "../App.css"
import Logout from "./Logout";

export default function NavBar({isUserLoggedIn, setIsUserLoggedIn}) {

    
    return (
        <div className="NavBar">

            <div><Link to="/" className="link">Home</Link></div>
            

            <div>
            {!isUserLoggedIn ? 
                <Link to="/LogIn" className="link" id="login">Log In</Link> 
                : null} 
            </div>
            <div>
                {!isUserLoggedIn ? 
                <Link to="/SignUp" className="link">Sign Up</Link>
                : null}
            </div>
            
            <div className='AddBook'>
                {isUserLoggedIn ? 
                    <Link to="/newbook" className="link" >Add a book</Link>
                : null}
            </div>
            <div className="">
                {isUserLoggedIn ? 
                <Logout setIsUserLoggedIn={setIsUserLoggedIn} />
                : null}   
            </div>

        </div>
    )
}
