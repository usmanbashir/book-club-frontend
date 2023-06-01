import axiosInstance from './AxiosInstance';

// export const getAllBooks = async() => {
//     const response = await axiosInstance.get(`/books`)
//     return response.data
// }
export const getAllBooks =() => {
    return fetch (`http://localhost:4000/books`)
}