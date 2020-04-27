import React, { useState , useEffect } from 'react';
import '../App.scss';
import { Form, Col, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import '../styles/_addcommentform.css'
import {api} from '../config'
const url = api+"/comment/postcomment"

function AddCommentform(props) {
    const [comment, setComment] = useState({
        "store_name": "",
        "poster_user": localStorage.getItem('Username'),
        "text": ""
    });

    const checkState = () => {
        console.log("comment: ", comment)
    }

    useEffect(() => {
        comment.store_name = props.storename
    }, [props])

    const handleChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
        
    }

    const onSubmit = async (e, usertoken) => {
        let timer
        await axios.post(url,
            comment
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token `+localStorage.getItem('Token')
                }
            })
            .then((res) => {
                
                
                res.status === 200 ? alert("Add Comment Successful"): alert("Error on add Comment")
            }).then(timer = setTimeout(() => window.location.reload(false), 1500))
            .catch((err) => {
                console.log(err)
                alert("Error on add Comment")
            })

    }

    return (
        <div>
            <Container >
                <Col class="card w-75">
                    <div class="card-body" id="add-comment">
                        <div class="edit-store-title underline ">Comment</div>
                        {localStorage.getItem('Username') ? <h5 class="head-newcomment card-title">{localStorage.getItem("Username")}</h5> : <h5 class="head-newcomment card-title">Please login again</h5>}
                        <Form>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control placeholder="" name="text" id="comment-box" onChange={e => handleChange(e)} />
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
