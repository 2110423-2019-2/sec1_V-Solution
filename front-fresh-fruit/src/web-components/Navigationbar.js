import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap'
import "../styles/_navbar.css"
import Nav_logo from '../pictures/Nav_logo.png';
import Nav_user from '../pictures/Nav_user.png';
import Nav_bell from '../pictures/Nav_bell.png';
import Nav_search from '../pictures/Nav_search.png';
import Nav_cart from '../pictures/Nav_cart.png';

function Navigationbar() {

  return (
    <nav class="navbar navbar-light bg-light">
      <a className="nav-title">
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
          <Nav.Link href="/profile"><h6>{localStorage.getItem('first_name')} {localStorage.getItem('last_name')}</h6></Nav.Link>
      </Nav>
    </nav>
  );
}

export default Navigationbar;