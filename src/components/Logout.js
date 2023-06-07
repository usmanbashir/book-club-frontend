
import { removeUserToken } from "../apis/UserApis"
import { useNavigate } from "react-router"

export default function Logout () {

const navigate = useNavigate()

function logUserOut() {
    console.log("GOODBYEEEEEE *********")
    // console.log(getToken)
    removeUserToken()
    navigate('/')
}
return(

    <button onClick={logUserOut}>Log out</button>
    )
}