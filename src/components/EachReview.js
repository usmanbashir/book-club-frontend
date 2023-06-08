import { useNavigate } from "react-router"
import { deleteOneReview } from "../apis/ReviewApis"

export default function EachReview({review, id}) {

    const navigate = useNavigate()

    const deleteReview = () => {
        console.log(id, review.title, review.id)
        deleteOneReview(id, review.id)
        navigate("/")
    }

    return (
        <>
            <div className="eachReview">
                <h4>{review.title}</h4>
                <p>{review.description}</p>
                <p>Rating: <strong>{review.rating}/5</strong></p>
            </div>

            <button onClick={deleteReview} >DELETE</button>
        </>

    )
}