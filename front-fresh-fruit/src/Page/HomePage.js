import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homefruit from  '../pictures/homefruit.png';

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

      

      
    </div>

    );

};

export default HomePage;