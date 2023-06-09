
import { removeUserToken } from "../apis/UserApis"
import { useNavigate } from "react-router"

export default function Logout ({setIsUserLoggedIn}) {

const navigate = useNavigate()

function logUserOut() {
    console.log("GOODBYEEEEEE *********")
    // console.log(getToken)
    removeUserToken()
    setIsUserLoggedIn(false)
    navigate('/')
}
return(

    <button onClick={logUserOut} className="button">Log out</button>
    )
}