import React from 'react';
import '../styles/_register.css';
import Informationform from '../web-components/InformationformSeller'
import Reg_user from '../pictures/Reg_user.png'
import Reg_shop from '../pictures/Reg_shop.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {

    return (
        <div>
            <div class="container-fluid container-register-seller">
                <div class="row">
                    <div class="col col-info">
                        <div class="row form-title">
                            <div class="col-5">
                                <h2>Register as seller</h2>
                            </div>  
                        </div>
                        <div class="row container-form-seller">
                            <div class="col-4">
                                <div class="row">
                                    <div class="col">
                                        <img src={Reg_user} alt="customer image" class="register-image"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class=" btn btn-primary upload-btn">
                                        <h4>Upload</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <img src={Reg_shop} alt="seller image" class="register-image"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class=" btn btn-primary upload-btn">
                                        <h4>Upload</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8 container-inform">
                                <Informationform />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
        
export default Register;