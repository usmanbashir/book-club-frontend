import { storeToken } from "../apis/UserApis"


export default function Logout () {
    
function logUserOut() {
    console.log("GOODBYEEEEEE *********")
    // console.log(storeToken)
}
    return(

        <button onClick={logUserOut}>Log out</button>
    )
}