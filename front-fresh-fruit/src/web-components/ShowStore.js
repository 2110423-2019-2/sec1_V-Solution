import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";
import ReserveButton from './ReserveButton';
import PurchaseButton from './PurchaseButton';

function Item(img, name, desc,price,amount) {
    return (
        <div>
            <div class="card  card-a " >
                <img src={img} class="card-img-top pic-card" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{desc}</p>

                </div>

                
                {localStorage.getItem('user_type')=='Buyer' ? 
                (<div class="card-footer edit-store-button">
                    <ReserveButton amount={amount}/>
                    <PurchaseButton amount={amount}/>
                </div>) :
                (<div></div>)
                }
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
                <div class="edit-store-title underline ">Products({product.length})</div>
                <div class="row row-card">

                    {product.map((item) => Item(item.product_type, item.product_name, item.product_desc,item.price,item.amount,item.product_id))}
                    {localStorage.getItem('user_type')=='Seller' ? (LastItem()) : (<div></div>)}

                </div>
            </div>
        </div>
    );
};

export default ShowStore;