import React from 'react'
import "../styles/_purchasebtn.css"

function PurchaseButton() {
    return(
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="purchase-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Purchase
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <form class="form-inline xl-form mr-auto mb-8">
                    <input class="dropdown-item form-control" type="text" placeholder="Amount" id="purchase-input" onkeyup="filterFunction()"/>
                    <button class="dropdown-item" id="purchase-button" type="submit" class='btn btn-primary'>Purchase</button>
                </form>
            </div>
        </div>
    );
} 
export default PurchaseButton