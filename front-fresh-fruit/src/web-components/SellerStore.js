import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { api } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import EditProductModal from '../web-components/EditProductModal'

const reserveURL = api + '/updateproduct/'
const launchURL = api + '/updateproduct/'

const ShowStore = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(props.product)
    }, [props])

    function Item(img, name, desc, id, item) {
        const onLaunch = () => {
            axios.post(launchURL + id + '/L', [], {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ` + localStorage.getItem('Token')
                }
            }).catch((err) => {
                console.log(err)
            })
        }

        const onReserve = () => {
            axios.post(reserveURL + id + '/R', [], {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ` + localStorage.getItem('Token')
                }
            }).catch((err) => {
                console.log(err)
            })
        }

        return (
            <div>
                <div class="card  card-a " >
                    {img ?
                        <img src={"http://localhost:8000" + img} class="card-img-top pic-card" alt="..." /> :
                        <FontAwesomeIcon class="card-img-top pic-card" alt="..." icon={faCarrot} color='#6d84b4' size='10x' />
                    }
                    <div class="card-body">
                        <div class="row">
                            <div class="col-9">
                                <h5 class="card-title">{name}</h5>
                            </div>
                            <div class="col-3">
                                <EditProductModal item={item} />
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

    let history = useHistory();
    function addNewItem() {
        history.push('/addItem')
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
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="true">Not Verify Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="launch-tab" data-toggle="tab" href="#launch" role="tab" aria-controls="launch" aria-selected="false">Launch</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="reserve-tab" data-toggle="tab" href="#reserve" role="tab" aria-controls="reserve" aria-selected="false">Reserve</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="add-tab">
                        <div class="row row-card">
                            {product.filter((item) => { return item.product_type === "A" })
                                .map((item) => Item(item.image, item.product_name, item.product_desc, item.id, item))}
                            {LastItem()}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="launch" role="tabpanel" aria-labelledby="launch-tab">
                        <div class="row row-card">
                            {product.filter((item) => { return item.product_type === "L" })
                                .map((item) => Item(item.image, item.product_name, item.product_desc, item.id, item))}
                            {LastItem()}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="reserve" role="tabpanel" aria-labelledby="reserve-tab">
                    <div class="row row-card">
                    {product.filter((item) => {return item.product_type === "R"})
                    .map((item) => Item(item.image, item.product_name, item.product_desc, item.id, item))}
                    {LastItem()}
                </div>
                        </div>
                </div>
{/* 
                <div class="edit-store-title underline ">Products({product.length})</div>
                <div class="row row-card">
                    {product.filter((item) => { return item.product_type === "A" })
                        .map((item) => Item(item.image, item.product_name, item.product_desc, item.id, item))}
                    {LastItem()}
                </div> */}
            </div>
        </div>
    );
};

export default ShowStore;