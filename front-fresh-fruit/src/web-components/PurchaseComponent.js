import React from 'react';
import _purchaseComponent from '../styles/_purchaseComponent.scss';
const PurchaseComponent = (props) => {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    <h4>Transation number 1</h4>
                    <div class='status'>
                    {props.status=='padding' ? <h4><p class='badge badge-danger'>Padding...</p></h4> : <h4><p class='badge badge-success'>Already delivered</p></h4>}
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body">
                        <h5 class="card-title">Product : {props.name}</h5>
                        <div style={{display:'flex',}}>
                        <p class="card-text">Price : {props.price} Bath</p>
                        <p class="card-text">Date : {props.deliveryDate}</p>
                        
                        <p class="card-text">Amount : {props.amount} </p>
                        {props.status=='padding' ? <button type="button" class="btn btn-success" style={{marginLeft:'50%'}}>Pay now</button> : <p></p>}
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default PurchaseComponent;