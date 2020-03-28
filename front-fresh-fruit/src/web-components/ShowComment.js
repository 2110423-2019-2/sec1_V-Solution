import React, { useState, useEffect } from 'react';
import { Container,Col } from 'react-bootstrap'

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
    const [comment, setComment] = useState([]);

    useEffect(() => {
        setComment(props.comment)
    }, [props])

    return (
        <div >
            <div class="container">
                <div class="edit-store-title underline ">Comment</div>
                <div class="row row-card">
                    {comment.map((item) => Comment(item.poster_user,item.text))}
                </div>
            </div>
        </div>
    );
};

export default ShowComment;