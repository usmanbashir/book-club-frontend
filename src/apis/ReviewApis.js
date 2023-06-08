import axiosInstance from './AxiosInstance';

export const getReviews = async(id) => {
    const response = await axiosInstance.get(
        `/books/${id}/reviews`, {
        headers: { "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token") 
                }            
        })
    // .then(response => console.log(response.data))
    .catch(error => console.log("THIS IS THE ERROR ***", error))
    
    return JSON.stringify(response.data)
}

export const createOneReview = (reviewInfo, id) => {

    const reviewDetails = JSON.stringify({
        "title": reviewInfo.title,
        "description": reviewInfo.description,
        "rating": parseInt(reviewInfo.rating),
        "user_id": parseInt(localStorage.getItem("currentUserId")),
        "book_id": parseInt(id)
    })
    console.log(reviewDetails)

    const response = axiosInstance.post(`http://localhost:4000/books/${id}/reviews`, reviewDetails, {
        headers: { "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token") 
        }
    })
    .then((response => console.log(response)))    

    return JSON.stringify(response.data)
}

export const deleteOneReview = (id, reviewId) => {
    const response = axiosInstance.delete(`http://localhost:4000/books/${id}/reviews/${reviewId}`, {
        headers: { "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") 
        }
        // .then(response => console.log(response))
    }) 
}