import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap'
import "../styles/_navbar.css"
import Nav_logo from '../pictures/Nav_logo.png';
import Nav_user from '../pictures/Nav_user.png';
import Nav_bell from '../pictures/Nav_bell.png';
import Nav_search from '../pictures/Nav_search.png';
import Nav_cart from '../pictures/Nav_cart.png';
import UserContext from '../Context/UserContext'
import { useHistory } from "react-router-dom";

function Navigationbar() {
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
        <div className="dropdown-nav">
          <NavDropdown eventKey={1}  class='dropdown-toggle'
            title={
              <div className="pull-left">
                <img className="side-nav" activeClassName="side-nav-active"src={Nav_search} alt="Search"/>
              </div>
            } 
            id="nav-dropdown">
              <form class="form-inline md-form mr-auto mb-4">
                <input class="form-control" type="text" placeholder="Search" id="mySearch" onkeyup="filterFunction()"/>
                <button id="search-button" type="submit" class='btn btn-primary'>Search</button>
              </form>
          </NavDropdown>
        </div>
          
          <Nav.Link href="/Cart"><img src={Nav_cart} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
          <Nav.Link href="/"><img src={Nav_bell} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
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