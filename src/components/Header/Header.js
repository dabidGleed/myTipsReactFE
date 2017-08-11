/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";
import Sidebar from '../Sidebar';

const logo = require('./logo.png');
const logo1 = require('../common/img/logo.png')

function Header() {
  return (
    <div className="home">
  		<div className="p-overlay"></div>
  		<div id="loader-wrapper">
  		  <div id="loader"></div>
  		  <div className="loader-section section-left"></div>
  		  <div className="loader-section section-right"></div>
  		</div>
  		<div id="wrapper">
  			<header className="sticky-header">
  				<nav className="navbar navbar-default">
  							<div className="navbar-overlay"></div>
  					<section className="container">
  						<div className="navbar-header">

  							<div className="hidden-lg hidden-md mobile-menu-btn">
  								<a href="#push-menu" className="button main-menu-toggle"><i className="fa fa-reorder" aria-hidden="true"></i></a>
  							</div>

  							<div className="logo-container">
                <div className="logo-main">
                  <img src={'../common/img/logo.png'} alt=""/>

              </div>

  								<div className="logo-mobile">
  									<a className="navbar-brand-mobile" href="index-2.html">
  									</a>
  								</div>
  							</div>
  						</div>
  						<div id="navbar" className="navbar-collapse collapse">
  							<ul className="nav navbar-nav hidden-sm">
  								<li><a href="/" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                    Home
                  </a></li>
  								<li><a href="#">Pages</a>
  									<ul>
  										<li><a href="/blank" onClick={(e) => { e.preventDefault(); history.push('/blank'); }}>Full Width</a></li>
  										<li><a href="page.html">Pages</a></li>
  										<li><a href="single-post.html">Single Post</a></li>
  									</ul>
  								</li>
  								<li><a href="#">Categories</a>
  									<ul>
  										<li><a href="categories.html">Categorie Style 1</a></li>
  										<li><a href="categories-2.html">Categorie Style 2</a></li>
  									</ul>
  								</li>
                  <li><a href="/table" onClick={(e) => { e.preventDefault(); history.push('/table'); }} >
                    Typography
                  </a></li>
                  <li><a href="/button" onClick={(e) => { e.preventDefault(); history.push('/button'); }} >
                    Contact
                  </a></li>
  							</ul>

  							<ul className="nav navbar-nav navbar-right navbar-right-socials">
  								<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i><span className="hidden-lg hidden-md">Facebook</span></a></li>
  								<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i><span className="hidden-lg hidden-md">Twitter</span></a></li>
  								<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i><span className="hidden-lg hidden-md">Instagram</span></a></li>
  								<li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i><span className="hidden-lg hidden-md">Youtube</span></a></li>
  								<li><a href="#push-menu" className="button main-menu-toggle"><i className="fa fa-reorder" aria-hidden="true"></i><span className="hidden-lg hidden-md">Push Menu</span></a></li>
  							</ul>
  						</div>
  					</section>
  				</nav>
  			</header>
      </div>
     </div>
  );
}
function toggleMenu(){
    if($(".navbar-collapse").hasclassName('collapse')){
      $(".navbar-collapse").removeclassName('collapse');
    }
    else{
      $(".navbar-collapse").addclassName('collapse');
    }
  }

export default Header;
