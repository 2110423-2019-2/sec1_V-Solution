import React from 'react';
import '../styles/_register.css';
import Informationform from '../web-components/Informationform'
import Reg_user from '../pictures/Reg_user.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {

    return (
        <div>
            <div class="container-fluid container-register">
                <div class="row">
                    <div class="col col-info">
                        <div class="row form-title">
                            <div class=" col-md-auto">
                                <h2>Register as customer</h2>
                            </div>
                        </div>
                        <div class="row container-form">
                            
                            <div class="col container-inform">
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