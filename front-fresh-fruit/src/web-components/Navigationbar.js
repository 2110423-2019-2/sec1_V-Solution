import React from 'react';

function Navigationbar() {

  let rgb = [96, 195, 50]

    return (
  
      <div style={{height:"50px", backgroundColor: `rgb(${rgb})`}}>
  
        <nav class="nav justify-content-center">
          <a class="nav-link active" href="#">Active link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled" href="#">Disabled link</a>
        </nav>
        
      </div>
  
    );
}

export default Navigationbar;