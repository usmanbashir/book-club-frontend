import { useEffect } from "react"
import { getToken } from "../apis/UserApis"

export default function Vip() {

    // const token = getToken

useEffect(() => {
    getToken()
}, [])

return(
    <>
     <h1>VIP area</h1>

    {/* {getToken &&
        <h2>You're in!</h2>
    } */}
</>
)
}