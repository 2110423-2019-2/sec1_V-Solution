import React, { useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap'
import axios from 'axios';
import { api } from '../config'

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
    const url = api + "/comment/get/"

    const [store_name, setStore_name] = useState("")
    const [comment, setComment] = useState([
        { name: 'comment1', desc: 'sdfasdfdsd' },
        { name: 'comment2', desc: 'sdfasdfdsd' },
        { name: 'comment1', desc: 'sdfasdfdsd' },
        { name: 'comment2', desc: 'sdfasdfdsd' },
        { name: 'comment1', desc: 'sdfasdfdsd' },
        { name: 'comment2', desc: 'sdfasdfdsd' },
    ]);

    async function getComment(store_name) {
        try {
            const response = await axios.get(url + store_name);
            setComment(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setStore_name(props.storename)
        getComment(store_name)
    }, [props])

    return (
        <div >
            <div class="container">
                <div class="row row-card">
                    <Container >
                        <Col class="card w-75">
                            <div class="card-body">
                                {comment.length !== 0 ? <div class="edit-store-title underline ">Comments : {comment.length}</div> : ''}
                                {comment.length !== 0 ?
                                    comment.filter((item) => { return comment }).map((item) =>
                                        Comment(item.poster_user, item.text))
                                    : <div><h1>Dont have any comment</h1></div>}
                            </div>
                        </Col>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default ShowComment;