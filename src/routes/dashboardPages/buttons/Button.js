import
React, { PropTypes }
from
'react';


import
Button
from
'react-bootstrap/lib/Button';
import
Panel
from
'react-bootstrap/lib/Panel';
import
PageHeader
from
'react-bootstrap/lib/PageHeader';

const title = 'Buttons';
const qr = require("../../../components/common/img/qr.png");
const cover = require("../../../components/common/img/article/cover.jpg");
const p1 = require("../../../components/common/img/product/1.jpg");
const p2 = require("../../../components/common/img/product/2.jpg");
const p3 = require("../../../components/common/img/product/3.jpg");

function displayButtons() {
    return (

            <div className="page contact">
                <div className="p-overlay"></div>
                <div id="loader-wrapper">
                    <div id="loader"></div>
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>
                <div id="wrapper">

                    <div className="canvas-container">
                        <div className="main-menu mobile-mega-menu">
                            <nav>
                                <ul className="CopyMobileMenu">
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <section className="container">
                        <div className="sticky-left col-md-8 no-padding">
                            <div className="page-content-google-maps">
                                <div className="google-maps-overlay"></div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5290737.212723131!2d31.7300568173043!3d39.64612830716432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1483769005825" width="100%" height="350" frameBorder="0" style="border:0" allowFullScreen></iframe>
                            </div>
                            <section className="page-content-inside">
                                <div className="col-md-4">
                                    <h4>Qr Code</h4>
                                    <div className="qr-code">
                                        <img src={qr} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h4>Center Address</h4>
                                    <address>
                                        <p>
                                            <strong>DEGIGN TEAM</strong>
                                        </p>
                                        <p>JOHN POTTER</p>
                                        <p>1355 Market Street, Suite 900</p>
                                        <p>San Francisco, CA 94103</p>
                                        <p>info@ravaze.com</p>
                                        <p>design@ravaze.com</p>
                                        <p>+90 506 xxx xx xx</p>
                                    </address>
                                </div>
                                <div className="col-md-4">
                                    <h4>Office Address</h4>
                                    <address>
                                        <p>
                                            <strong>DEVELOPER TEAM</strong>
                                        </p>
                                        <p>ADAM CLAIN</p>
                                        <p>1355 Market Street, Suite 900</p>
                                        <p>San Francisco, CA 94103</p>
                                        <p>info@ravaze.com</p>
                                        <p>developer@ravaze.com</p>
                                        <p>+90 506 xxx xx xx</p>
                                    </address>
                                </div>
                                <div className="clearfix"></div>
                                <h4>Contact Form</h4>
                                <div className="contact-form">
                                    <form action="http://ravaze.com/themeforest/patika-theme/POST">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                            <input className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-link" aria-hidden="true"></i>
                                            </span>
                                            <input className="form-control" placeholder="Website" />
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            </span>
                                            <input className="form-control" placeholder="E-Mail" />
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </span>
                                            <input className="form-control" placeholder="Phone Number" />
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </span>
                                            <textarea className="form-control" placeholder="Message" />
                                        </div>
                                        <button type="submit" className="btn btn-default">Send</button>
                                    </form>
                                </div>
                                <div className="clearfix"></div>
                            </section>
                        </div>
                        <div className="sticky-right col-md-4 no-padding">
                            <div className="sidebar">
                                <div className="sidebar-box no-padding">
                                    <div className="profile-header">
                                        <div className="profile-image">
                                            <img src={cover} />
                                        </div>
                                    </div>
                                    <div className="profile-details">
                                        <h3>Ravaze Patika Theme</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi.
                                        <div className="social">
                                            <ul>
                                                <li>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube">
                                                        <i className="fa fa-youtube"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>

                                <div className="sidebar-box">
                                    <div className="sidebar-title">
                                        <span>Search</span>
                                    </div>
                                    <div id="search-input">
                                        <input type="text" className="form-control input-lg" placeholder="Search Keywords..." />
                                        <button className="btn btn-info btn-lg" type="button">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="sidebar-box">
                                    <div className="sidebar-title">
                                        <span>Categories</span>
                                    </div>
                                    <div className="lines"></div>
                                    <ul className="list">
                                        <li>
                                            <a href="#">
                                                <span className="badge">14</span>
                                            Cras justo odio </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="badge">23</span>
                                            Dapibus ac facilisis in</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="badge">32</span>
                                            Morbi leo risus </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="badge">14</span>
                                            Cras justo odio </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="badge">12</span>
                                            Dapibus ac facilisis in </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="badge">12</span>
                                            Dapibus ac facilisis in </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar-box">
                                    <div className="sidebar-title">
                                        <span>Latest Comments</span>
                                    </div>
                                    <div id="latest-comments-slider" className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="latest-comments">
                                                <i className="fa fa-comments"></i>
                                                <h1>BY Ravaze
                                                    <span>3 Days Ago</span>
                                                </h1>
                                                <span className="latest-comments-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi. </span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="latest-comments">
                                                <i className="fa fa-comments"></i>
                                                <h1>BY Ravaze
                                                    <span>5 Days Ago</span>
                                                </h1>
                                                <span className="latest-comments-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi. </span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="latest-comments">
                                                <i className="fa fa-comments"></i>
                                                <h1>BY Ravaze
                                                    <span>7 Days Ago</span>
                                                </h1>
                                                <span className="latest-comments-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi. </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-box">
                                    <div className="sidebar-title">
                                        <span>Products</span>
                                    </div>
                                    <div id="product-carousel-owl" className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="product-carousel">
                                                <div className="product-carousel-image">
                                                    <a href="#">
                                                        <img src={p1} alt="" />
                                                    </a>
                                                </div>

                                                <div className="product-carousel-price">24 $ </div>

                                                <div className="product-carousel-name">
                                                    <a href="#">
                                                        <h5>Lorem ipsum dolor sit amet</h5>
                                                    </a>
                                                </div>

                                                <div className="product-carousel-add-btn">
                                                    <a href="#">Add the cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-carousel">
                                                <div className="product-carousel-image">
                                                    <a href="#">
                                                        <img src={p2} alt="" />
                                                    </a>
                                                </div>

                                                <div className="product-carousel-price">24 $ </div>

                                                <div className="product-carousel-name">
                                                    <a href="#">
                                                        <h5>Lorem ipsum dolor sit amet</h5>
                                                    </a>
                                                </div>

                                                <div className="product-carousel-add-btn">
                                                    <a href="#">Add the cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product-carousel">
                                                <div className="product-carousel-image">
                                                    <a href="#">
                                                        <img src={p3} alt="" />
                                                    </a>
                                                </div>

                                                <div className="product-carousel-price">24 $ </div>

                                                <div className="product-carousel-name">
                                                    <a href="#">
                                                        <h5>Lorem ipsum dolor sit amet</h5>
                                                    </a>
                                                </div>

                                                <div className="product-carousel-add-btn">
                                                    <a href="#">Add the cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-box">
                                    <div className="sidebar-title">
                                        <span>My Instagram Feed</span>
                                    </div>
                                    <div className="instagram-feed-wrap">
                                        <div id="instafeed">
                                        </div>
                                    </div>
                                </div>

                                <div className="postit">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                            </div>
                        </div>
                        <div className="scrollToTop">
                            <i className="fa fa-angle-up" aria-hidden="true"></i>
                        </div>
                    </section>

                    <footer className="footer" id="footer-bottom">
                        <div className="container">
                            <div className="copyright">Copyright
                                <i className="fa fa-copyright"></i>
                            All Right Reserved 2017
                                <strong>RAVAZE</strong>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        );
}


export default displayButtons;
