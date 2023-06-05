import { useEffect } from "react"
import { storeToken } from "../apis/UserApis"

export default function Vip() {

    // const token = storeToken

useEffect(() => {
    // storeToken()
}, [])

return(
    <>
     <h1>VIP area</h1>

    {/* {token &&
        <h2>You're in!</h2>
    } */}
</>
)
}