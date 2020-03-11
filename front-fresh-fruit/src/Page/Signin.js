import React from 'react';
import Loginform from '../web-components/Loginform';
const Signin = () => {
    return (
        <div class="container-fluid" style={{backgroundColor:"#6AC17D"}}>
          <div class="row" style={{height: "700px"}}>
            <Loginform/>
          </div>
        </div>
    );
};

export default Signin;