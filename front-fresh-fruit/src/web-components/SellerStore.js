import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { api } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import EditProductModal from '../web-components/EditProductModal'

const reserveURL = api + '/updateproduct/'
const launchURL = api + '/updateproduct/'

const ShowStore = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(props.product)
    }, [props])


    let history = useHistory();
    function addNewItem() {
        history.push('/addItem')
    }

    function Item(img, name, desc, id) {
        const onLaunch = () => {
            axios.post(launchURL + id + '/L', [], {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ` + localStorage.getItem('Token')
                }
            })
                .catch((err) => {
                    console.log(err)
                })
        }

        const onReserve = () => {
            axios.post(reserveURL + id + '/R', [], {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ` + localStorage.getItem('Token')
                }
            })
                .catch((err) => {
                    console.log(err)
                })
        }

        return (
            <div>
                <div class="card  card-a " >
                    <img src={img} class="card-img-top pic-card" alt="..." />
                    <div class="card-body">
                        <div class="row">
                            <div class="col-9">
                                <h5 class="card-title">{name}</h5>

                            </div>
                            <div class="col-3">
                                <EditProductModal/>
                            </div>
                        </div>
                        <p class="card-text">{desc}</p>

                    </div>

                    <div class="edit-store-button-seller card-footer bg-transparent ">
                        <button type="button" class="btn btn-outline-warning" onClick={onReserve}>Reserve</button>
                        <button type="button" class="btn btn-outline-success" onClick={onLaunch}>Launch</button>
                    </div>
                </div>
            </div>
        )
    }

    function LastItem() {
        return (
            <div>
                <div class="card card-a " >
                    <div class="card-body">
                        <div style={{ color: "#ffec62" }}>
                            <i class="fas fa-plus-circle fa-5x vertical-center" onClick={addNewItem}></i>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div >
            <div class="container">
                <div class="edit-store-title underline ">Products({product.length})</div>
                <div class="row row-card">
                    {product.map((item) => Item(item.product_type, item.product_name, item.product_desc, item.id))}
                    {LastItem()}

                </div>
            </div>
        </div>
    );
};

export default ShowStore;