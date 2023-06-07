import { useParams } from "react-router"
import { useState } from "react"
import { createOneReview } from "../apis/ReviewApis"


export default function NewReviewForm () {

const {id} = useParams()
const [ addReviewForm, setAddReviewForm ] = useState(false)

const showForm = () => {
    setAddReviewForm(!addReviewForm)
}

const [ newReview, setNewReview ] = useState({
    title: "",
    description: "",
    rating: ""
})

function handleInput(e) {
    setNewReview({...newReview, [e.target.name]: e.target.value})
    console.log([e.target.name], e.target.value)
}

const submitNewReview = (e) => {
    e.preventDefault()
    createOneReview(newReview, id)
}

    return(
    <>
        <div>review this book
            <button onClick={showForm}> X </button>
        </div>
        {addReviewForm ? 
            <form>
                <div>
                    <label>Title</label>
                    <input 
                        name="title"
                        value={newReview.title}
                        onChange={handleInput}
                        autoComplete="off"
                    />
                </div>

                <div>
                    <label>Description</label>
                    <input 
                        name="description"
                        value={newReview.description}
                        onChange={handleInput}
                        autoComplete="off"
                    />
                </div>

                <div>
                    <label>Rating /5</label>
                        <select name="rating" onChange={handleInput} value={newReview.rating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                </div>

                <button onClick={submitNewReview}>Submit my review</button>

            </form>    
        : null }
    </>
    )
}