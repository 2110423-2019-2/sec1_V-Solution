import React from 'react';
import OrderComponent from '../web-components/OrderComponent.js';

const YourOrder = () => {
    /*const [data,setData] = useState({
    })*/
    return(
        <div>
            <div class="container-fluid" style={{backgroundColor:"#6AC17D"}}>
                <div class="row" style={{height: "700px"}}>
                    <div class="col" style={{ marginTop: '30px' }}>
                    <h1 style={{ fontFamily: "Marker Felt", fontSize: "50px", marginLeft: '150px', color: 'white' }}>My Purchase</h1>
                    </div>
                    <div style={{ backgroundColor: "#E6FFEC", width: "1210px", height: "600px", marginLeft: "160px" }}>
                    </div>
                </div>            
            </div>
        </div>
    )
}
export default YourOrder;