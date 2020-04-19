import React from 'react';
import '../styles/_register.css';
import Informationform from '../web-components/Informationform'
import Reg_user from '../pictures/Reg_user.png'
import Reg_shop from '../pictures/Reg_shop.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {

    return (
            <div class="container-fluid container-register-seller">
                <div class="row">
                    <div class="col col-info">
                        <div class="row form-title">
                            <div class="col-md-auto">
                                <h2>Register as seller</h2>
                            </div>  
                        </div>
                        <div class="row container-form-seller">
                            <div class="col container-inform-seller">
                                <Informationform user_type="S"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
        
export default Register;