import React, { Component } from 'react';
//import logo from './logo.svg';

//import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import { Link} from 'react-router-dom';

const Navbar =(props) => (
    <nav className="brown darken-3">
    <div className="container">
    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
   
       <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link exact to="/">Home</Link></li>
          <li><Link to="/objectos">Objectos</Link></li>
       </ul>
    </div>
  </nav>



);



export default Navbar;