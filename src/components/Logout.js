import { storeToken } from "../apis/UserApis"
import { getToken, removeUserToken } from "../apis/UserApis"

export default function Logout () {
    
function logUserOut() {
    console.log("GOODBYEEEEEE *********")
    // console.log(getToken)
    removeUserToken()
}
    return(

        <button onClick={logUserOut}>Log out</button>
    )
}