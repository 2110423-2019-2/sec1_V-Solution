import React from 'react';
import '../App.scss';
import HomeBackGround from '../pictures/background.png';
import Informationform from '../web-components/Informationform'
import Logo from '../pictures/logo.png'
import Userimg from '../pictures/user.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {

    return (

        <div>

           
            {/* body part */}

            <div class="container-fluid" style={{border: "solid black 2px", height: "1000px",backgroundImage: `url(${HomeBackGround})`}}>

                <div class="row">
                    <div class="col" style={{border: "solid black 2px", textAlign: "center", marginLeft: "10%", marginRight: "10%", height: "1000px", backgroundColor: "rgb(255,255,255,0.7)"}}>
                        <div class="row" style={{marginTop: "30px", height: "100px"}}>
                            <div class="col-2" style={{border: "blue solid 2px"}}>
                                <img src={Logo} alt = "logo" style={{width: "120px"}} />
                            </div>  
                            <div class="col-5" style={{border: "blue solid 2px"}}>
                                <h1 style={{marginTop: "45px", color: "darkblue", fontWeight: "bold"}}>Register as customer</h1>
                            </div>
                            <div class='col-5'>
                                <a href="/registerSeller" class='btn btn-primary'>Register as Seller</a>
                            </div>
                        </div>
                        <div class="row" style={{marginTop: "90px"}}>
                            <div class="col-4" style={{border: "red solid 2px"}}>
                                <div class="row">
                                    <div class="col" style={{border: "black solid 2px", marginTop: "50px"}}>
                                        <img src={Userimg} alt="customer image"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col"style={{border: "black solid 2px", marginTop: "20px"}}>
                                        <h1>upload pic</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8" style={{border: "red solid 2px"}}>
                                <Informationform />
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/* end body part */}

        </div>

    );
};
        
export default Register;