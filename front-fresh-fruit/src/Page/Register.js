import React from 'react';
import '../App.scss';
import HomeBackGround from '../pictures/background.png';
import Navigationbar from '../web-components/Navigationbar';
import Informationform from '../web-components/Informationform'
import Logo from '../pictures/logo.png'
import Userimg from '../pictures/user.png'

const Register = () => {

    return (

        <div>

            {/* navigation bar */}

            <Navigationbar />

            {/* end navigation bar */}

            {/* body part */}

            <div className="bg" style={{
                backgroundImage: `url(${HomeBackGround})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <div className="page" style={{
                    backgroundColor: "white", width: "1250px", marginLeft: "150px",
                    marginRight: "200px", opacity: 0.75321}}>

                    {/* Head */}

                    <div style={{display:"flex"}}>

                         <img className = "img" style={{width:"140px", height:"140px", marginTop:"65px", marginLeft:"60px"}} src={Logo}                     alt="fresh fruit logo" />

                        <h1 style={{fontWeight:"bold", marginLeft: "75px", color: "darkblue", marginTop: "115px" }}>Register as customer</h1>

                    </div>

                    {/* Body */}
                    
                    <div className = "row">

                        

                        <div style = {{width:"550px"}}>
                            
                            <img style = {{paddingTop: "70px"}} src={Userimg} alt="User" />

                            <div>
                                <button class="btn" style={{marginTop:"20px"}}>

                                    <span style = {{width:"200px", height:"43px", textAlign: "center",
                                        fontSize:"25px"}} class="badge badge-secondary">Upload Picture</span>

                                </button>
                            </div>

                        </div>

                        <div class = "col">
                            
                            <Informationform />

                        </div>


                    </div>

                    {/* footer */}

                    <button class="btn" style={{marginTop:"20px", marginLeft: "40%"}}>

                        <span style = {{width:"150px", height:"40px", textAlign: "center",
                            fontSize:"25px"}} class="badge badge-secondary">Submit</span>

                    </button>
                    


                </div>

            </div>

            {/* end body part */}

        </div>

    );
};
        
export default Register;