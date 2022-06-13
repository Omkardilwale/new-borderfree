import React from 'react'

//import {Navbar,Nav,NavDropdown,Form,Button,Container,FormControl} from 'react-bootstrap';
// used bootstrap only for navbar
function Navbarr() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img classNames='logoimage' src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-com-brand-png-0.png" alt="logo" width="30" height="26" class="d-inline-block align-text-top"/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="#">Child</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbarr;