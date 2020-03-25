import React from 'react'
import "../styles/_reservebtn.css"

function ReserveButton() {
    return(
        <div class="dropup">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="reserve-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Reserve
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <form class="form-inline xl-form mr-auto mb-8">
                    <input class="dropdown-item form-control" type="text" placeholder="Amount" id="reserve-input" onkeyup="filterFunction()"/>
                    <button class="dropdown-item" id="reserve-button" type="submit" class='btn btn-primary'>Reserve</button>
                </form>
            </div>
        </div>
    );
} 
export default ReserveButton