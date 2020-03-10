import React from 'react';
import pineapple from '../pictures/pineapple.png';
import buttoncus from '../pictures/buttoncus.png';
import buttonsell from '../pictures/buttonsell.png';

import 'bootstrap/dist/css/bootstrap.min.css';


const SignUp = () =>{
    return(
        <div>
            <div class="container-fluid" style={{backgroundColor:"#6AC17D"}}>
                <div class="row" style={{height: "700px"}}>

                    <div class="col">
                        <div class="row" style={{marginTop: "80px"}}>
                            <div class="col" style={{textAlign: "center", marginLeft:"20px"}}><img src={pineapple} style={{height:'250px',width:'150px'}}/></div>
                            <div class="col" style={{textAlign: "center", marginTop:"70px", color:"white"}}><h1>Sign Up to FreshFruit.</h1><h1 style={{marginTop:"5px"}}>Who are you?</h1></div>
                            <div class="col" style={{textAlign: "center", marginRight:"20px"}}><img src={pineapple} style={{height:'250px',width:'150px'}}/></div>
                        </div>
                        <div class="row" style={{marginTop: "40px"}}>
                            <div class="col" style={{textAlign: "center", textAlign: "right", marginRight: "50px"}}><a href='/register'><img src={buttoncus} style={{height:'200px',width:'250px'}}/></a></div>
                            <div class="col" style={{textAlign: "center", textAlign: "left", marginLeft: "50px"}}><a href='/registerSeller'><img src={buttonsell} style={{height:'200px',width:'250px'}}/></a></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SignUp;