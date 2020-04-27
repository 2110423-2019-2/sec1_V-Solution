import React from 'react';
import _purchaseComponent from '../styles/_purchaseComponent.css';
const PurchaseComponent = (props) => {
    
    const cardBody = (product_name,seller_name,deliver_price,amount) => {
        return (
            <div class="card-body">
                <h5 class="card-title">Product : {product_name}</h5>
                <div style={{ display: 'flex', }}>
                    <p class="card-text" id='cardText'>Price : {deliver_price} Bath</p>
                    <p class="card-text" id='cardText'>Amount : {amount} </p>
                    <p class="card-text" id='cardText'>Seller : {seller_name} </p>
                    
                </div>
            </div>
        )
    }
    const listItem = props.items.map((item) => cardBody(item.product.product_name,item.product.seller_name,item.product.deliver_price,item.amount));
    return (
        <div>
            <div class="card" id='cardPurchase'>
                <div class="card-header" id='cardHeader'>
                    <h4>Transation number {props.order_id} Price: {props.price}</h4>
                    <div class='status' style={{display:'flex'}}>
                        {props.status == 'P' ? <h4><p class='badge badge-danger'>Padding To Deliver...</p></h4> : <h4><p class='badge badge-success'>Already delivered</p></h4>}
                        {props.status == '' ? <button type="button" class="btn btn-success btn-sm" style={{height:'30px'}}>Pay now</button> : <p></p>}
                    </div>
                    
                </div>
                <div class="card-body">
                {/*have to use item to map */}
                {listItem}
                </div>
            </div>
        </div>
    );
};

export default PurchaseComponent;