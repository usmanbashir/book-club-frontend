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
    }


    function submitNewUser(e){
        e.preventDefault();
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
<div className="formContainer">
    <div className="signupForm">
        <h2>Sign up form</h2>

        <form>
            <div className="fields">
                <label>Username</label>
                <input
                    className="input-field"
                    name='username'
                    type='text'
                    value={newUser.username}
                    onChange={handleInput} 
                    autoComplete="off"
                    required
                />
            </div>

            <div className="fields">
                <label>First Name</label>
                <input 
                    className="input-field"
                    name='firstname'
                    type='text'
                    value={newUser.firstname}
                    onChange={handleInput} 
                    autoComplete="off"            
                    required
                />
            </div>

            <div className="fields">
                <label>Last Name</label>
                <input
                    className="input-field"
                    name='lastname'
                    type='text'
                    value={newUser.lastname}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                />
            </div>
            
            <div className="fields">
                <label>Email</label>
                <input
                    className="input-field"
                    name='email'
                    type='email'
                    value={newUser.email}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                />
            </div>

            <div className="fields">
                <label>Password</label>
                <input     
                    className="input-field"               
                    name='password'
                    type='password'
                    value={newUser.password}
                    onChange={handleInput} 
                    required
                />
            </div>

            <button className="button" onClick={(e) => {
            submitNewUser(e)
          }}>Sign Up</button>

        </form>

    </div>
    </div>

)
}