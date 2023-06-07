

export default function EachReview(props) {

    const {review} = props;

    // console.log("STEP DOWN A COMPONENT %%% " + JSON.stringify(review))
    // console.log("SECOND STEP DOWN %%%%  " + reviewList)

    return (
        <>
            <div className="eachReview">
                <div>{review.title}</div>
                
            </div>
        </>

    )
}