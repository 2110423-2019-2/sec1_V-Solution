import React from 'react';

function Navigationbar() {

  let rgb = [96, 195, 50]

    return (
  
      <div className = "nav" style={{height:"40px", backgroundColor: `rgb(${rgb})`}}>
  
        <div>

          <span className = "thaifont" style={{color: "white", fontWeight:"bold", fontSize:"20px", marginLeft:"35px", paddingTop: "5px"}}>Fresh Fruit Co.ltd: 087-765-XXXX
          </span>

          <span className = "thaifont" style={{color: "white", fontWeight:"bold", fontSize:"20px", paddingLeft:"1050px"}}><a href="#">
            
            For Staff
          </a>
          </span>
          

        </div>
        

      </div>
  
    );
}

export default Navigationbar;