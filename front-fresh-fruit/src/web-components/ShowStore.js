import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";

function Item(img, name, desc) {
    return (
        <div>
            <div class="card  card-a " >
                <img src={img} class="card-img-top pic-card" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{desc}</p>
                    <div class="edit-store-button">
                        <button href="" class="btn btn-edit btn-outline-success edit-launch-botton">Purchase</button>
                        <button href="" class="btn btn-edit btn-outline-warning">Reserve</button>
                    </div>

                </div>
            </div>
        </div>
    )
}



const ShowStore = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(props.product)
    }, [props])


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

    console.log("store", product)
    return (
        <div >
            <div class="container">
                <div class="edit-store-title underline ">Products(5)</div>
                <div class="row row-card">
                    {product.map((item) => Item(item.product_type, item.produc_ame, item.product_desc))}
                    {LastItem()}

                </div>
            </div>
        </div>
    );
};

export default ShowStore;