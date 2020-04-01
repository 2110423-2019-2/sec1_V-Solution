import React from 'react';
import _purchaseComponent from '../styles/_purchaseComponent.scss';
const PurchaseComponent = (props) => {

    const cardBody = (name,price,deliveryDate,amount,status) => {
        return (
            <div class="card-body">
                <h5 class="card-title">Product : {name}</h5>
                <div style={{ display: 'flex', }}>
                    <p class="card-text">Price : {price} Bath</p>
                    <p class="card-text">Date : {deliveryDate}</p>

                    <p class="card-text">Amount : {amount} </p>
                    
                </div>
            </div>
        )
    }
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    <h4>Transation number 1</h4>
                    <div class='status' style={{display:'flex'}}>
                        {props.status == 'padding' ? <h4><p class='badge badge-danger'>Padding...</p></h4> : <h4><p class='badge badge-success'>Already delivered</p></h4>}
                        {props.status == 'padding' ? <button type="button" class="btn btn-success btn-sm" style={{height:'30px'}}>Pay now</button> : <p></p>}
                    </div>
                    
                </div>
                <div class="card-body">
                {cardBody('mango',100,'10-mar-2562',50,'padding')}
                </div>
            </div>
        </div>
    );
};

export default PurchaseComponent;