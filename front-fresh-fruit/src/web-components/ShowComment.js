import React, { useState, useEffect } from 'react';
import { Container,Col } from 'react-bootstrap'
import axios from 'axios';
import {api} from '../config'

function Comment(name, desc) {
    return (
        <div>
            <Container >
                <Col class="card w-75">
                    <div class="card-body">
                       <h5 class="card-title">{name}</h5>
                       <p class="card-text">{desc}</p>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

const ShowComment = (props) => {
    const url = api+"/comment/get/" + props.storename

    const [comment, setComment] = useState([]);

    async function getComment() {
        try {
            const response = await axios.get(url);
            setComment(response.data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getComment()
    }, )

    return (
        <div >
            <div class="container">
                <div class="row row-card">
                    {comment.length!==0 ? 
                        comment.filter((item) => { return comment }).map((item) =>
                        Comment(item.name,item.desc))
                    : <div>Dont have any comment</div>}
                </div>
            </div>
        </div>
    );
};

export default ShowComment;