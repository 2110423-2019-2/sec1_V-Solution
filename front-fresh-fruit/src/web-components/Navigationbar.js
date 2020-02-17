import React from 'react';
import logo from '../pictures/logo.png';

function Navigationbar() {

  let rgb = [96, 195, 50]

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <a class="navbar-brand" href="/" style={{marginLeft:'15%'}}><img src={logo} style={{width:'75px',height:'75px'}}/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/editStore">Store</a>
          </li>
          <div class='row' style={{float:'right',right:'15%',marginLeft:'auto',position:'absolute'}}>
          <li class="nav-item">
            <a class="nav-link" href="/signin"><button type='button' class='btn btn-primary'>Login</button></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Register"><button type='button' class='btn btn-outline-primary'>Register</button></a>
            
          </li>
          </div>
        </ul>
      </div>

    </nav>  
    );
}

export default Navigationbar;