import React from "react";
import {NavLink,  Link} from 'react-router-dom';
import './navbar.css';

function Header(){

return(

    <div>
     
      <header>
      <div className="container d-flex align-items-center justify-content-between">
      <NavLink className="navbar-brand" to="/"> <img src="/images/Logo-transparent.png" ></img> </NavLink>
       <nav className="navbar navbar-expand-lg navbar-light ">

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Tech News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/opportunities">Opportunities</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Insights">Insights</NavLink>
        </li>
        
       
       
      </ul>
      
    </div>
  
</nav>
<div className="right-nav">
      <ul>
        <li> <a href=""><i className="fa fa-search" aria-hidden="true"></i></a> </li>
        <li> <a href=""><i className="fa fa-bell" aria-hidden="true"></i></a> </li>
        <li> <a href=""><i className="fa fa-envelope" aria-hidden="true"></i></a> </li>
        <li> <a href="" className="account"><i className="fa fa-user"></i><span>Account</span> </a> </li>
      </ul>
    </div>
</div>
</header>
    </div>
   
)

}

export default Header;