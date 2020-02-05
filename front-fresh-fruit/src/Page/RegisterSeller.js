import React from 'react';
import '../App.scss';
import HomeBackGround from '../pictures/background.png';
import Navigationbar from '../web-components/Navigationbar';
import InformationformSeller from '../web-components/InformationformSeller'
import Logo from '../pictures/logo.png'
import Userimg from '../pictures/user.png'

const RegisterSeller = () => {

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

                         <img className = "img" style={{width:"140px", height:"140px", marginTop:"45px", marginLeft:"60px"}} src={Logo}                     alt="fresh fruit logo" />

                        <h1 style={{fontWeight:"bold", marginLeft: "75px", color: "darkblue", marginTop: "95px" }}>Register as seller</h1>

                    </div>

                    {/* Body */}
                    
                    <div className = "row" style = {{textAlign: "center", marginTop: "15px"}}>

                        

                        <div style = {{width:"550px"}}>

                            <div>

                            <img style = {{paddingTop: "70px"}} src={Userimg} alt="User" />

                            <div>
                                <button class="btn" style={{marginTop:"20px"}}>

                                    <span style = {{width:"200px", height:"43px", textAlign: "center",
                                        fontSize:"25px"}} class="badge badge-secondary">Upload Picture</span>

                                </button>
                            </div>

                            </div>
                            
                            

                        </div>

                        <div class = "col col-form-width">
                            
                            <InformationformSeller />

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
        
export default RegisterSeller;