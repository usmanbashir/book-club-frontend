import axios from 'axios';
import axiosInstance from './AxiosInstance';
import {updateToken} from '../components/NavBar';

export const getUser = async(id) => {
  console.log(id)
  const response = await axiosInstance.get(`/users/${id}`, {
        headers: { "Content-Type": "application/json",
                   "Authorization": localStorage.getItem("token") 
    }
  })  
  // .then(response => console.log(response.data))
  .catch((error) => console.log("This is the error: ", error))

  return response.data
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
    const response = axiosInstance.post(`/signup`, newUser, {
        headers: {"Content-Type": "application/json"}})
        .then((response) => console.log(response))
        .catch((error) => console.log(`This is the error: ${error}`))

}


export const createUserToken = (userInfo, setCurrentUserId) => {
  
  const userDetails = JSON.stringify({"user": {
    "email": `${userInfo.email}`,
    "password": `${userInfo.password}`
  }})
  // console.log(userDetails)
    const response = axiosInstance.post(`/login`, userDetails, {
      headers: {"Content-Type": "application/json"}})
      // console.log(response.headers)
      .then((response) => {
        if (response.headers.authorization){
          console.log(response)
          localStorage.setItem("token", response.headers.authorization)
          localStorage.setItem("currentUserId", response.data.data.id)
          setCurrentUserId(response.data.data.id)
        }
      })
      .catch((error) => console.log(`This is the error: ${error}`))
}


// export const getToken = localStorage.getItem("token")

export const removeUserToken = () => {
// Call the destroy session controller using the 
// saved token which was created when user signed in. 
  const response = axiosInstance.delete(`/logout`, {
            headers: { "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("token") 
                      }})
    .then((response) => console.log(response))
  // Remove the token from local storage. 
  localStorage.removeItem("token")
  localStorage.removeItem("currentUserId")
  // return response.data
}

export const deleteUser = (id) => {
  const response = axiosInstance.delete(`/signup`, {
    headers: { "Content-Type": "application/json",
               "Authorization": localStorage.getItem("token") 
}
})  
    .then(response => console.log(response))
    .catch((error) => console.log("This is the error: ", error))
}
