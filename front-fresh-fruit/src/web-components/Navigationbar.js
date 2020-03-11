import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Route, Switch, NavLink } from 'react-router-dom'
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
      <Nav className="justify-content-center">
          <Nav.Link exact to="/" className="main-nav" activeClassName="main-nav-active">Home</Nav.Link>
          <Nav.Link exact to="/EditProfile" className="main-nav" activeClassName="main-nav-active">Profile</Nav.Link>
          <Nav.Link exact to="/Order" className="main-nav" activeClassName="main-nav-active">Your Order</Nav.Link>
          <Nav.Link exact to="/Report" className="main-nav" activeClassName="main-nav-active">Report</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
          <Nav.Link exact to="/"><img src={Nav_search} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
          <Nav.Link exact to="/Cart"><img src={Nav_cart} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
          <Nav.Link exact to="/"><img src={Nav_bell} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
          <Nav.Link exact to="/User"><img src={Nav_user} className="side-nav" activeClassName="side-nav-active"></img></Nav.Link>
      </Nav>
    </nav>
  );
}

export default Navigationbar;