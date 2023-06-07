import { Link } from "react-router-dom";
import "../App.css"
import Logout from "./Logout";

export default function NavBar({isUserLoggedIn, setIsUserLoggedIn}) {

    // const [ currentToken, setCurrentToken ] = useState({})

    // useEffect(() => {
    //     setCurrentToken(localStorage.getItem("token"))
    // }, [currentToken])

    // export const updateToken = () => {
    //     setCurrentToken(localStorage.getItem("token"))
    // }

    return (
        <div class="container-fluid">

            <div class="navbar-brand"><Link to="/">Home</Link></div>
            

            <div class="nav-link link-success link-offset-2 link-underline-opacity-70 link-underline-opacity-100-hover">
            {!isUserLoggedIn ? 
                <Link to="/LogIn">Log In</Link> 
                : null} 
            </div>
            <div class="nav-link">
                {!isUserLoggedIn ? 
                <Link to="/SignUp">Sign Up</Link>
                : null}
            </div>
            <div class="nav-linklink-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                {isUserLoggedIn ? 
                <Logout setIsUserLoggedIn={setIsUserLoggedIn} />
                : null}   
            </div>

        </div>
    )
}