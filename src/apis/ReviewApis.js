import axiosInstance from './AxiosInstance';

export const getReviews = async(id) => {
    const response = await axiosInstance.get(
        `/books/${id}/reviews`, {
        headers: { "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token") 
                }            
        })
    // .then(response => console.log(response.data))
    .catch(error => console.log("THIS IS THE ERROR ***" + error))
    
    return JSON.stringify(response.data)
}

