import React from 'react';
import Background from '../pictures/background.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const HomePage = () => {

    return (

        <div>
      
      {/* ------------- header ------------------ */}

      <div class="container-fluid">

        <div class="row" style={{height: "40px", background: "green"}}>
          <div class="col">
            <h3 style={{fontWeight: "bold", fontsize: "20px", color: "white", textAlign: "right"}}>For Staff</h3>
          </div>
        </div>

      </div>

      {/* -------------- body ------------------- */}

      <div class="container-fluid">

        <div class="row" style={{height: "110px"}}>
          <div class="col-4" style={{marginTop: "20px"}}>
              <h3 style={{textAlign: "right", marginTop: "32px"}}>Pic</h3>
          </div>
          <div class="col" style={{marginTop: "20px"}}>
            <h3 style={{textAlign: "center", marginTop: "32px"}}>Home</h3>
          </div>
          <div class="col" style={{marginTop: "20px"}}>
            <h3 style={{textAlign: "center", marginTop: "32px"}}>Search</h3>
          </div>
          <div class="col" style={{marginTop: "20px"}}>
            <h3 style={{textAlign: "center", marginTop: "32px"}}>About Us</h3>
          </div>
          <div class="col" style={{marginTop: "20px"}}>
            <h3 style={{textAlign: "center", marginTop: "32px"}}>Contact</h3>
          </div>
          <div class="col" style={{marginTop: "20px"}}>
            <h3 style={{textAlign: "right", marginTop: "32px"}}>Login</h3>
          </div>
        </div>

      </div>

      {/* -------------- lower body part --------------------*/}

      <div class="container-fluid" style={{backgroundImage: `url(${Background})`}}>

        <div class="row" style={{height: "700px"}}>

          <div class="col">

            <div class="row" style={{marginTop: "120px"}}>
              <div class="col" style={{textAlign: "center"}}><h1>Welcome to FreshFruit</h1></div>
            </div>
            <div class="row" style={{marginTop: "20px"}}>
              <div class="col" style={{textAlign: "center"}}><h5>Central of buy&sell fruit center</h5></div>
            </div>
            <div class="row" style={{marginTop: "50px"}}>
              <div class="col" style={{textAlign: "center"}}><h1>Join us! Who are you?</h1></div>
            </div>
            <div class="row" style={{marginTop: "50px"}}>
              <div class="col" style={{textAlign: "center", textAlign: "right", marginRight: "15px"}}><h1>pic1</h1></div>
              <div class="col" style={{textAlign: "center", textAlign: "left", marginLeft: "15px"}}><h1>pic2</h1></div>
            </div>
            <div class="row" style={{marginTop: "25px"}}>
              <div class="col" style={{textAlign: "center"}}><h5>already have account? <a href="#">Login here</a></h5></div>
            </div>

          </div>

        </div>

      </div>

      {/* --------------- footer part ----------------------- */}

      <div class="container-fluid" style={{backgroundColor: "green"}}>

        <div class="row" style={{height: "250px"}}>
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