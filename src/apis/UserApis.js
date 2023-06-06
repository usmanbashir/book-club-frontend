import axios from 'axios';
import axiosInstance from './AxiosInstance';

export const getUser = (id) => {
  // return fetch(`localhost:4000/users/${id}`)
  const response = axiosInstance.get(`localhost:4000/users/${id}`, {
    headers: { "Content-Type": "application/json"
    ,
    "Authorization": localStorage.getItem("token") 
    }
  })
  .then(response => console.log(response))

  // console.log(response)
}
    
export const createUser = (userInfo) => {

const newUser = JSON.stringify({"user": {
    "username": `${userInfo.username}`,
    "firstname": `${userInfo.firstname}`,
    "lastname": `${userInfo.lastname}`,
    "email": `${userInfo.email}`,
    "password": `${userInfo.password}`
  }
})
console.log(newUser)
  const response = axiosInstance.post(`http://localhost:4000/signup`, newUser, {
      headers: {"Content-Type": "application/json"}})
      .then((response) => console.log(response))
      .catch((error) => console.log(`This is the error: ${error}`))

}


export const createUserToken = (userInfo) => {
  
  const userDetails = JSON.stringify({"user": {
    "email": `${userInfo.email}`,
    "password": `${userInfo.password}`
  }})
  // console.log(userDetails)
    const response = axiosInstance.post(`http://localhost:4000/login`, userDetails, {
      headers: {"Content-Type": "application/json"}})
      // console.log(response.headers)
      .then((response) => {
        if (response.headers.authorization){
          console.log(response)
          localStorage.setItem("token", response.headers.authorization)
          localStorage.setItem("currentUserId", response.data.data.id)
        }
      })
      .catch((error) => console.log(`This is the error: ${error}`))
}


// export const getToken = localStorage.getItem("token")

export const removeUserToken = () => {
// Call the destroy session controller using the 
// saved token which was created when user signed in. 
  const response = axiosInstance.delete(`http://localhost:4000/logout`, {
            headers: { "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("token") 
                      }})
    .then((response) => console.log(response))
  // Remove the token from local storage. 
  localStorage.removeItem("token")
  localStorage.removeItem("currentUserId")
  // return response.data
}

