import React, { useEffect } from 'react';
import Loginform from '../web-components/Loginform';
import UserContext from '../Context/UserContext'
import { Redirect } from 'react-router-dom'
const Signin = () => {


  return (
    <UserContext.Consumer>
      {() => localStorage.getItem('Token')!==null ? (
        <Redirect to={"/profile"} />
      ) : <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
          <div class="row" style={{ height: "700px" }}>
            <Loginform />
          </div>
        </div>
      }
    </UserContext.Consumer>
    // <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
    //   <div class="row" style={{ height: "700px" }}>
    //     <Loginform />
    //   </div>
    // </div>

  );
};

export default Signin;