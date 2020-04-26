import React, { useState, useEffect } from 'react'
import "../styles/_reservebtn.css"
import axios from 'axios'
import { api } from '../config';

function ReserveButton(props) {
    const [amount, setAmount] = useState(0)
    const [data, setData] = useState({
        "id": 0,
        'amount': 0,
    })

    const url = api + '/cart/add'

    useEffect(() => {
        setData({
            'id': parseInt(props.id),
            'amount': parseInt(props.amount)
        })
    }, [props])

    const submitReserve = async (e) => {
        if (amount > props.amount) {
            alert('we dont have enough amount that you want')
        } else {
            await axios.post(url, data, {
                headers: {

                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('Token')
                }
            })
                .then((res) => {
                    console.log(res.status)
                    alert('Added to cart')
                })
                .catch((err) => {
                    console.log(err)

                    alert(localStorage.getItem('Token'))
                    alert(props.id)

                    alert("Error on add  Item to cart")
                })
        }
    }




    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="reserve-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Reserve
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <form class="form-inline xl-form mr-auto mb-8">

                    <p id='amount' style={{ color: 'orange' }}>we have {props.amount} in our stock</p>
                    <input class="dropdown-item form-control" type="number" placeholder="Amount" id="reserve-input" onkeyup="filterFunction()" onChange={(e) => setAmount(amount + e.target.value)} />

                    <button class="dropdown-item" id="purchase-button" type="button" class='btn btn-primary' onClick={submitReserve}>Purchase</button>
                </form>
            </div>
        </div>
    );
} 
export default ReserveButton