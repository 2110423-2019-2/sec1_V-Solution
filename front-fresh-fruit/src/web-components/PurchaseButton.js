import React,{useState} from 'react'
import "../styles/_purchasebtn.css"
import axios from 'axios'

function PurchaseButton(props) {
    const [amount,setAmount] = useState(0)

    const submitReserve = () =>{
        if (amount>props.amount){
            alert('we dont have enough amount that you want')
        }else{
            
            alert('do something about update database')
            alert(amount)
        }
    }
    return(
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="purchase-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Purchase
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <form class="form-inline xl-form mr-auto mb-8">


                <p id='amount' style={{color:'orange'}}>we have {props.amount} in our stock</p>
                    <input class="dropdown-item form-control" type="text" placeholder="Amount" id="reserve-input" onkeyup="filterFunction()" onChange={e => setAmount(e.target.value)}/>
                    
                    <button class="dropdown-item" id="purchase-button" type="submit" class='btn btn-primary' onClick={submitReserve}>Purchase</button>
                </form>
            </div>
        </div>
    );
} 
export default PurchaseButton