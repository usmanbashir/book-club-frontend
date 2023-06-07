
export default function EachReview({review}) {
    

    return (
        <>
            <div className="eachReview">
                <h4>{review.title}</h4>
                <p>{review.description}</p>
                <p>Rating: <strong>{review.rating}/5</strong></p>
            </div>

        </>

    )
}