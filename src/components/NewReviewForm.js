import { useParams } from "react-router"
import { useState } from "react"
import { createOneReview } from "../apis/ReviewApis"
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
    console.log(e.target.name, e.target.value)
}

const submitNewReview = (e) => {
    e.preventDefault()
    createOneReview(newReview, id)
    setNewReview({
        title: "",
        description: "",
        rating: ""
    })
}

    return(
<>


{/* label/placeholders */}




    <div className="leaveReview">
        <div className="reviewHeader">Leave a review</div>

        <div className="reviewHeader">
            <button onClick={showForm} className="btnTwo"> X </button>
        </div>

    {addReviewForm ? 
        // <form className="reviewForm">
        //     <div className="reviewField">
        //         <label>Title</label>
        //         <input 
        //             className="input-field"
        //             name="title"
        //             value={newReview.title}
        //             onChange={handleInput}
        //             autoComplete="off"
        //         />
        //     </div>

        //     <div className="reviewField">
        //         <label>Description</label>
        //         <textarea
        //             className="input-field"
        //             name="description"
        //             value={newReview.description}
        //             onChange={handleInput}
        //             autoComplete="off"
        //         />
        //     </div>

        //     <div className="reviewField">
        //         <label>Rating /5</label>
        //             <select 
        //                 name="rating" 
        //                 className="input-field"
        //                 onChange={handleInput} 
        //                 value={newReview.rating}>
        //                     <option value="1">1</option>
        //                     <option value="2">2</option>
        //                     <option value="3">3</option>
        //                     <option value="4">4</option>
        //                     <option value="5">5</option>
        //             </select>
        //     </div>



        //     <button onClick={submitNewReview}>Submit my review</button>

        // </form>    



<Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
            <Form.Control                    
                className="input-field"
                name="title"
                value={newReview.title}
                onChange={handleInput}
                autoComplete="off"
                placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
            <Form.Control
                className="input-field"
                name="description"
                value={newReview.description}
                onChange={handleInput}
                autoComplete="off"
                placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Dropdown>
            <Dropdown.Toggle 
                        variant="success" 
                        id="dropdown-basic"
                        name="rating" 
                        className="input-field"
                        key="Rating"
                        onChange={handleInput} 
                        value={newReview.rating}>
                    Rating
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item value="1">1</Dropdown.Item>
                    <Dropdown.Item value="2">2</Dropdown.Item>
                    <Dropdown.Item value="3">3</Dropdown.Item>
                    <Dropdown.Item value="4">4</Dropdown.Item>
                    <Dropdown.Item value="5">5</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <Button variant="success" type="submit" onClick={submitNewReview}>
        Submit
      </Button>

</Form>
    : null }
    </div>
</>
    )
}