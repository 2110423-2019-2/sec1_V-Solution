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
                       <h5 class="card-title"><b>Username :</b> {name}</h5>
                       <p class="card-text">{desc}</p>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

const ShowComment = (props) => {
    const url = api+"/comment/get/" + props.storename

    const [comment, setComment] = useState([
        {name:'comment1',desc:'sdfasdfdsd'},
        {name:'comment2',desc:'sdfasdfdsd'},
        {name:'comment1',desc:'sdfasdfdsd'},
        {name:'comment2',desc:'sdfasdfdsd'},
        {name:'comment1',desc:'sdfasdfdsd'},
        {name:'comment2',desc:'sdfasdfdsd'},
    ]);

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
    }, [])

    return (
        <div >
            <div class="container">
                <div class="row row-card">
                    
                    <div>
                    {comment.length !== 0 ? <h3>number of commnet : {comment.length}</h3> : '' }
                    
                    {comment.length!==0 ? 
                        comment.filter((item) => { return comment }).map((item) =>
                        Comment(item.name,item.desc))
                    : <div><h1>Dont have any comment</h1></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowComment;