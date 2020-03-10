import React from 'react';
import '../App.scss';
import HomeBackGround from '../pictures/background.png';
import Informationform from '../web-components/InformationformSeller'
import Logo from '../pictures/logo.png'
import Userimg from '../pictures/user.png'
import Sellerimg from '../pictures/seller.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {

    return (

        <div>
            {/* body part */}

            <div class="container-fluid" style={{border: "solid black 2px", height: "1000px",backgroundImage: `url(${HomeBackGround})`}}>

                <div class="row">
                    <div class="col" style={{border: "solid black 2px", textAlign: "center", marginLeft: "10%", marginRight: "10%", height: "1000px", backgroundColor: "white", opacity: "0.75"}}>
                        <div class="row" style={{marginTop: "30px", height: "100px"}}>
                            <div class="col-2" style={{border: "blue solid 2px"}}>
                                <img src={Logo} alt = "logo" style={{width: "120px"}} />
                            </div>  
                            <div class="col-5" style={{border: "blue solid 2px"}}>
                                <h1 style={{marginTop: "45px", color: "darkblue", fontWeight: "bold"}}>Register as seller</h1>
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
                                        
                                    <button type="button" class="btn btn-primary" style={{minWidth:'100%'}}>Upload</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col"style={{border: "black solid 2px", marginTop: "50px"}}>
                                    <img src={Sellerimg} alt="seller image" style={{width: "300px"}}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col" style={{border: "black solid 2px", marginTop: "20px"}}>
                                        <button type="button" class="btn btn-primary" style={{minWidth:'100%'}}>Upload</button>
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