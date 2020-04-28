import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown ,Popover,Button,OverlayTrigger} from 'react-bootstrap'
import "../styles/_navbar.css"
import Nav_logo from '../pictures/Nav_logo.png';
import Nav_user from '../pictures/Nav_user.png';
import Nav_bell from '../pictures/Nav_bell.png';
import Nav_search from '../pictures/Nav_search.png';
import Nav_cart from '../pictures/Nav_cart.png';
import UserContext from '../Context/UserContext'
import { useHistory } from "react-router-dom";

function Navigationbar() {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h2">Notification</Popover.Title>
      <Popover.Content>
        <div class='card' style={{width:'250px',height:'50px'}}>this is notification data</div>
      </Popover.Content>
    </Popover>
  );



  const history = useHistory();
  return (
    <nav class="navbar navbar-light bg-light">
      <a className="nav-title" href='/'>
        <img src={Nav_logo} width="50" height="50"></img>FreshFruit
      </a>
      {localStorage.getItem('first_name')==null ? 
      (<Nav className="justify-content-center"></Nav>) :
      (<Nav className="justify-content-center">
          <Nav.Link href="/" className="main-nav" activeClassName="main-nav-active">Home</Nav.Link>
          <Nav.Link href="/signin" className="main-nav" activeClassName="main-nav-active">Profile</Nav.Link>
          <Nav.Link href="/Order" className="main-nav" activeClassName="main-nav-active">Your Order</Nav.Link>
          <Nav.Link href="/Report" className="main-nav" activeClassName="main-nav-active">Report</Nav.Link>
      </Nav>)
      }
      <Nav className="justify-content-end">
      
        
          <Nav.Link href="/Cart"><img src={Nav_cart} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
          <Nav.Link >
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <img src={Nav_bell} className="side-nav" activeClassName="side-nav-active"/>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link href="/profile"><img src={Nav_user} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
          <Nav.Link>{localStorage.getItem('first_name')==null ? (<p></p>) : 
                    (
                    <h5>{localStorage.getItem('first_name')}</h5>
        
                  )}
          </Nav.Link>
          <Nav.Link>{localStorage.getItem('first_name')==null ? (<p></p>) : 
                    (
                      <div class='row'>
                              
                              <div class='col'><button  class='btn btn-secondary btn-sm' onClick={(e) => {
                                  e.preventDefault();
                                  localStorage.clear();
                                  history.push('/')

                              }}>Log out</button></div>
                    </div>
                  )}
          </Nav.Link>
      </Nav>
    </nav>
  );
}

export default Navigationbar;