import React from 'react';
import AddItemform from '../web-components/AddItemform';
import Pic from '../pictures/fruit.png'
import { Container, Col } from 'react-bootstrap'

const AddItem = () => {
    return (

        <Container >
            <Col md={{ span: 6, offset: 3 }}>
                <AddItemform />
            </Col>

        </Container>

    );
};

export default AddItem;