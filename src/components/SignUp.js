import { useState } from "react";
import { createUser } from "../apis/UserApis";
import { useNavigate } from "react-router";


export default function SignUp() {

    const navigate = useNavigate()

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
        // Send the new user information to the createUser API call.
        createUser(newUser)
        // Set the newUser state to empty.
        setNewUser({
            username:"", 
            firstname: "", 
            lastname: "",
            email: "",
            password: ""
        })
        navigate("/login")
    }

return(

    <div>
        <h2>Sign up form</h2>

        <form>
            <div>
                <label>Username</label>
                <input
                    name='username'
                    type='text'
                    value={newUser.username}
                    onChange={handleInput} 
                    autoComplete="off"
                    required
                />
            </div>

            <div>
                <label>First Name</label>
                <input 
                    name='firstname'
                    type='text'
                    value={newUser.firstname}
                    onChange={handleInput} 
                    autoComplete="off"            
                    required
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    name='lastname'
                    type='text'
                    value={newUser.lastname}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                />
            </div>
            
            <div>
                <label>Email</label>
                <input
                    name='email'
                    type='email'
                    value={newUser.email}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                />
            </div>

            <div>
                <label>Password</label>
                <input                    
                    name='password'
                    type='password'
                    value={newUser.password}
                    onChange={handleInput} 
                    required
                />
            </div>

            <button onClick={(e) => {
            submitNewUser(e)
          }}>Sign Up</button>

        </form>

    </div>
    
)
}