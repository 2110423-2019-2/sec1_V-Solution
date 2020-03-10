import React, { useState } from 'react';
import '../App.scss';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import UserContext from '../Context/UserContext'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const url = "http://127.0.0.1:8000/api/createproduct"

function AddItemform() {
    const [product, setProduct] = useState({
        "product_name": "",
        "product_desc": "",
        "category": "",
        "subcategory": "",
        "province": "",
        "district": "",
        "product_type": "",
        "harvest_date": "",
        "price": "",
        "amount": "",
        "unit_of_amount": "",
        "deliver_company": "",
        "deliver_price": ""
    });


    const checkState = () => {
        console.log("product: ", product)
    }

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        console.log(product)
    }

    const history = useHistory();
    const onSubmit = async (e, usertoken) => {
        console.log(usertoken)
        await axios.post(url,  {
            headers: {
                'Authorization': `Token ${usertoken}`
            },data:{
                product
            }
        })
            .then((res) => {
                checkState()
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div>
            <UserContext.Consumer>
                {({ usertoken, username }) => (
                    <Container >
                        <Col md={{ span: 6, offset: 3 }}>
                            {username ? <h1 class="head-newitem">สวัสดีครับคุณ {username}</h1> : <h1 class="head-newitem">Please login again</h1>}

                            <Form>
                                <h3 class="head-newitem">สร้างรายการสินค้าใหม่</h3>

                                <Form.Group controlId="">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control placeholder="" name="product_name" onChange={e => handleChange(e)} />
                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Label>Describtion</Form.Label>
                                    <Form.Control placeholder="" name="product_desc" onChange={e => handleChange(e)} />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select" name="category" onChange={e => handleChange(e)}>
                                            <option>Choose...</option>
                                            <option>Fruit</option>
                                            <option>Vegetable</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formSubCategory">
                                        <Form.Label>SubCategory</Form.Label>
                                        <Form.Control as="select" name="subcategory" onChange={e => handleChange(e)}>
                                            <option>Choose...</option>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control placeholder="" name="province" onChange={e => handleChange(e)} />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control placeholder="" name="district" onChange={e => handleChange(e)} />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formType">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control name="product_type" onChange={e => handleChange(e)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formDate">
                                        <Form.Label>Harvest Date</Form.Label>
                                        <Form.Control name="harvest_date" onChange={e => handleChange(e)} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control name="price" onChange={e => handleChange(e)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formAmount">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control name="amount" onChange={e => handleChange(e)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="unit">
                                        <Form.Label>Unit Of Amount</Form.Label>
                                        <Form.Control name="unit_of_amount" onChange={e => handleChange(e)} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="del_comp">
                                        <Form.Label>Deliver Company</Form.Label>
                                        <Form.Control name="deliver_company" onChange={e => handleChange(e)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="del_price">
                                        <Form.Label>Deliver Price></Form.Label>
                                        <Form.Control name="deliver_price" onChange={e => handleChange(e)} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Confirm" />
                                </Form.Group>

                                <Button variant="primary" type="button" onClick={(e, usertoken) => {
                                    onSubmit()
                                    history.push("/EditStore")
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Container>
                )}
            </UserContext.Consumer>

        </div>

    );
}

export default AddItemform;