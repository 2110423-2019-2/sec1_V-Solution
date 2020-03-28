import React, { useState } from 'react';
import '../App.scss';
import { Form, Col, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import '../styles/_addcommentform.css'
import {api} from '../config'
const url = api+"/comment/postcomment/"

function AddCommentform() {
    const [comment, setComment] = useState({
        "store_name": localStorage.getItem('Storename'),
        "poster_user": localStorage.getItem('Username'),
        "text": ""
    });

    const checkState = () => {
        console.log("comment: ", comment)
    }

    const handleChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
        console.log(comment)
    }

    const onSubmit = async (e, usertoken) => {
        console.log(usertoken)
        await axios.post(url,
            comment
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token `+localStorage.getItem('Token')
                }
            })
            .then((res) => {
                checkState()
                console.log(res.status)
                res.status === 200 ? alert("Add Comment Successful"): alert("Error on add Comment")
            })
            .catch((err) => {
                console.log(err)
                alert("Error on add Comment")
            })

    }

    return (
        <div>
            <Container >
                <Col class="card w-75">
                    <div class="card-body">
                        {localStorage.getItem('Username') ? <h5 class="head-newcomment card-title">{localStorage.getItem("Username")}</h5> : <h5 class="head-newcomment card-title">Please login again</h5>}
                        <Form>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control placeholder="" name="text" onChange={e => handleChange(e)} />
                            <Button id="submit-button" variant="primary" type="button" onClick={(e, usertoken) => {
                                onSubmit()
                            }}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Container>
        </div>

    );
}

export default AddCommentform;
