import { useState, useEffect } from "react"
import { createUserToken } from "../apis/UserApis"
import Logout from './Logout'
import { getToken } from "../apis/UserApis"

export default function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })


function handleInput(e){
    setUser({...user, [e.target.name]: e.target.value})
}

function findUser(e){
    e.preventDefault()
    createUserToken(user)
    console.log(user)
}


return (
    <div>
            <Logout />

        <h2>Log in form</h2>

        <form>
            <div>
                <label>Email</label>
                <input
                    name='email'
                    value={user.email}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    name='password'
                    value={user.password}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <button onClick={findUser}>Log in</button>
        </form>
    </div>

)

}