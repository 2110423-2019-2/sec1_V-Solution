import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homefruit from  '../pictures/homefruit.png';
import buttoncus from '../pictures/buttoncus.png';

import buttonsell from '../pictures/buttonsell.png';

const HomePage = () => {

    return (

    <div>
      
      {/* ------------- header ------------------ */}


      {/* -------------- body ------------------- */}

      

      {/* -------------- lower body part --------------------*/}

      <div class="container-fluid" style={{backgroundColor:"#6AC17D"}}>

        <div class="row" style={{height: "700px"}}>

          <div class="col">

            <div class="row" style={{marginTop: "120px", marginLeft: "50px"}}>
              <div class="col" style={{textAlign: "center"}}><img src={homefruit} style={{height:'400px',width:'600px'}}/></div>
              <div class="col" style={{textAlign: "center", color:"white"}}><h1>Find Daily & Organic fruit</h1>
                <h2>with</h2><h1>FRESHFRUIT</h1>
                <input type="text" name="search" style={{marginTop:"40px", width:"500px", height:"45px", borderRadius:"20px"}}/>
                <div style={{marginTop:"40px"}}><button style={{width:'120px', height:'40px', borderRadius:"20px"}}><a href='/SignUp'>Search</a></button></div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* --------------- footer part ----------------------- */}

      <div class="container-fluid" style={{backgroundColor: "black"}}>

        <div class="row" style={{height: "10%"}}>
          <div class="col">
            <div class="row">
              <h2 style={{color:"white", fontWeight: "bold", marginLeft: "20px", marginTop: "10px"}}>Customer Support</h2>
            </div>
            <div class="row" style={{ marginTop: "10px"}}>
              <div class="col" style={{marginLeft: "20px"}}>
                  <div class="row">
                    <h6 style={{color: "white"}}>Email: support@hotmail.com</h6>
                  </div>
                  <div class="row">
                    <h6 style={{color: "white"}}>Tel: 02-XXXXXXXX</h6>
                  </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <h2 style={{color:"white", fontWeight: "bold", marginTop: "10px"}}>Customer Address</h2>
            </div>
            <div class="row" style={{marginTop: "10px"}}>
              <div class="col">
                <div class="row">
                  <h6 style={{color: "white"}}>Chulalongkorn University</h6>
                </div>
                <div class="row">
                  <h6 style={{color: "white"}}>254 Phayathai Road, Pathumwan, Bangkok 10330 Thailand</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style={{height: "50px"}}>
          <div class="col">
            <h4 style={{fontsize: "2px", color: "white", marginTop: "12px"}}>Fresh Fruit @ 2020 All Right Reserved</h4>
          </div>
          <div class="col">
            <h4 style={{fontsize: "2px", color: "white", textAlign:"right", marginTop: "12px"}}>Privacy Term</h4>
          </div>
        </div>


      </div>

      
    </div>

    );

};

export default HomePage;