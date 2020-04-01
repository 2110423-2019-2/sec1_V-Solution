import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV,faCarrot } from '@fortawesome/free-solid-svg-icons'

import { useHistory } from "react-router-dom";
import ReserveButton from './ReserveButton';
import PurchaseButton from './PurchaseButton';

function Item(id, img, name, desc, price, amount, product_id, index) {
    return (
        <div key={index}>
            <div class="card card-a" >
                {img ?
                    <img src={"http://localhost:8000" + img} class="card-img-top pic-card" alt="..." /> :
                    <FontAwesomeIcon class="card-img-top pic-card" alt="..." icon={faCarrot} color='#6d84b4' size='10x' />
                }
                <div class="card-body">
                    <h5 class="card-title"><a href={'/getproduct/' + id}>{name}</a></h5>
                    <p class="card-text">{desc}</p>

                </div>


                {localStorage.getItem('user_type') == 'Buyer' ?
                    (<div class="card-footer edit-store-button">
                        <ReserveButton amount={amount} id={id}/>
                        <PurchaseButton amount={amount} id={id} />
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

                    {product.map((item, index) => Item(item.id, item.image, item.product_name, item.product_desc, item.price, item.amount, item.product_id, index))}
                    {localStorage.getItem('user_type') == 'Seller' ? (LastItem()) : (<div></div>)}

                </div>
            </div>
        </div>
    );
};

export default ShowStore;