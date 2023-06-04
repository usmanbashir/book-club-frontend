import { useState } from "react";
import { createUser } from "../apis/UserApis";


export default function SignUp() {

    const [newUser, setNewUser] = useState({
        username:"", 
        firstname: "", 
        lastname: "",
        email: "",
        password: ""
    })

    // Add each user input field to the newUser state.
    function handleInput(e) {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
        // console.log(e.target.value)
    }


    function submitNewUser(e){
        e.preventDefault();
        // console.log(newUser);
        createUser(newUser)
            // .then((user) => user.json())
            // // .then((data) => {
            // //     console.log("PRACTICE")}
            // // )
            // .catch((error) => console.log(error))
        setNewUser({
            username:"", 
            firstname: "", 
            lastname: "",
            email: "",
            password: ""
        })
    }

return(

    <div>
        <h2>Sign up form</h2>

        <form>
            <div>
                <label>Username</label>
                <input
                    name='username'
                    value={newUser.username}
                    onChange={handleInput} 
                    autoComplete="off"
                />
            </div>

            <div>
                <label>First Name</label>
                <input 
                    name='firstname'
                    value={newUser.firstname}
                    onChange={handleInput} 
                    autoComplete="off"            
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    name='lastname'
                    value={newUser.lastname}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>
            
            <div>
                <label>Email</label>
                <input
                    name='email'
                    value={newUser.email}
                    onChange={handleInput}
                    autoComplete="off"
                />
            </div>

            <div>
                <label>Password</label>
                <input                    
                    name='password'
                    value={newUser.password}
                    onChange={handleInput} 
                />
            </div>

            <button onClick={(e) => {
            submitNewUser(e)
          }}>Sign Up</button>

        </form>

    </div>
    
)
}