import axiosInstance from './AxiosInstance';

// export const getAllBooks = async() => {
//     const response = await axiosInstance.get(`/books`)
//     return response.data
// }
export const getAllBooks = () => {
    return fetch (`http://localhost:4000/books`)
}

export const getOneBook = (id) => {
    return fetch (`http://localhost:4000/books/${id}`)
}

export const createOneBook = (bookInfo) => {
    // debugger;
    const bookDetails = JSON.stringify({
        "title": bookInfo.title,
        "author": bookInfo.author,
        "genre": bookInfo.genre,
        "publishedOn": bookInfo.publishedOn,
        "meeting_date": bookInfo.meeting_date,
        "meeting_location": bookInfo.meeting_location,
        "user_id": parseInt(localStorage.getItem("currentUserId"))
    })
    console.log(bookDetails)

    const response = axiosInstance.post(`http://localhost:4000/books`, bookDetails, {
        headers: { "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") 
        }
    })
    .then((response => console.log(response)))

}

// New book details and book id are required for the patch request. 
export const editOneBook = (bookInfo, id) => {
    const bookDetails = JSON.stringify({
        "title": bookInfo.title,
        "author": bookInfo.author,
        "genre": bookInfo.genre,
        "publishedOn": bookInfo.publishedOn, 
        "meeting_date": bookInfo.meeting_date,
        "meeting_location": bookInfo.meeting_location,
        "user_id": parseInt(localStorage.getItem("currentUserId"))
    })

    console.log(bookDetails)

    const response = axiosInstance.patch(`http://localhost:4000/books/${id}`, bookDetails, {
        headers: { "Content-Type": "application/json"
        ,
        "Authorization": localStorage.getItem("token") 
        }
    })
    .then(response => console.log(JSON.stringify(response)))
}