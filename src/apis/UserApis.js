import axios from 'axios';
import axiosInstance from './AxiosInstance';

// export const getUser = (id) => {
//   return fetch(`localhost:4000/users/${id}`)
// }
    
export const createUser = async(userInfo) => {

  const newUser = {user: {

    username: `${userInfo.username}`,
    firstname: `${userInfo.firstname}`,
    lastname: `${userInfo.lastname}`,
    email: `${userInfo.email}`,
    password: `${userInfo.password}`
  }
}
  const response = await axiosInstance.post(`http://localhost:4000/signup`, newUser)
  return response.data


  // export const createUser = (userInfo) => {

  //   const newUser = {user: {
  
  //     username: `${userInfo.username}`,
  //     firstname: `${userInfo.firstname}`,
  //     lastname: `${userInfo.lastname}`,
  //     email: `${userInfo.email}`,
  //     password: `${userInfo.password}`
  //   }
  // }
  //   return axios.post(`http://localhost:4000/signup`, newUser)


  // return fetch(`http://localhost:4000/signup`, {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json",
  //   },
  //   body: JSON.stringify({user: {

  //       username: `${userInfo.username}`,
  //       firstname: `${userInfo.firstname}`,
  //       lastname: `${userInfo.lastname}`,
  //       email: `${userInfo.email}`,
  //       password: `${userInfo.password}`
  //     }
  //   }
  //   )
  // })
}
