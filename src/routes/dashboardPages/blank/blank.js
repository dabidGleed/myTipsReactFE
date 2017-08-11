import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

const i1 = require("../../../components/common/img/1.jpg");
const i2 = require("../../../components/common/img/2.jpg");
const ia3 = require("../../../components/common/img/article/3.jpg");
const ia5 = require("../../../components/common/img/article/5.jpg");
const i3 = require("../../../components/common/img/3.jpg");



function displayBlank(props, context) {
  context.setTitle(title);
  return (
      <div className="page page-full-width">       
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
                  <div className="col-md-12 no-padding">
                      <div className="page-content-slider">
                          <div id="page-content-slider" className="owl-carousel owl-theme">
                              <div className="item">
                                  <div className="page-content-slider-img">
                                      <img src={i1} alt=""/>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="page-content-slider-img">
                                      <img src={i2} alt=""/>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="page-content-slider-img">
                                      <img src={i3} alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <section className="page-content-inside">
                          <p>
                              <img className="align-left" width="390" src={ia3} alt=""/>

                                  <h3>Curabitur varius dui eu sem hendrerit malesuada.</h3>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus placerat felis at mattis.
                              Vivamus iaculis dapibus pharetra. Nam ultrices ipsum eu ante rhoncus finibus. Sed arcu ex, condimentum
                              sed augue egestas, condimentum mollis erat. Sed ornare, nunc ut aliquam imperdiet, sem erat hendrerit
                              odio, eget semper risus diam eget ipsum. Maecenas bibendum dignissim diam, at maximus nisi vestibulum
                              tincidunt. Maecenas in dignissim lorem. Cras ullamcorper tristique consectetur. Quisque congue facilisis
                              enim. Nullam consequat semper purus id finibus. Vestibulum vestibulum enim eget mauris ornare fermentum.
                              Nullam ipsum massa, ultricies quis molestie id, feugiat volutpat magna. className aptent taciti sociosqu ad
                              litora torquent per conubia nostra, per inceptos himenaeos. Nunc dignissim velit sed posuere egestas.
                              Curabitur varius dui eu sem hendrerit malesuada.
                              </p>
                              <p>
                              Cras cursus, erat id vulputate iaculis, ipsum arcu sagittis nunc, a ultricies est ligula vel nunc.
                              Nam ut elit at mi vulputate ultrices. Donec congue porttitor ex eu cursus. Suspendisse finibus
                              ullamcorper feugiat. Pellentesque vel leo at purus gravida cursus nec nec ligula. Sed rutrum maximus
                              aliquam. Fusce eu felis tincidunt, sollicitudin erat non, eleifend mauris. Duis sollicitudin pretium
                              sapien vel hendrerit.</p>


                              <h3>Duis sollicitudin pretium sapien vel hendrerit.</h3>

                              <p>
                              Nunc posuere bibendum felis, vitae viverra erat ornare ac. Pellentesque ullamcorper metus eu libero
                              hendrerit feugiat non vitae erat. Proin tincidunt dignissim lacus non egestas. Curabitur congue dui
                              nec massa sollicitudin dictum. Nulla condimentum id metus id imperdiet. Aliquam tempor sed justo
                              semper finibus. Duis mollis, elit quis vehicula elementum, purus purus tempor tellus, vitae tempus
                              arcu eros vitae mauris. Maecenas et blandit mauris.Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Maecenas luctus placerat felis at mattis. Vivamus iaculis dapibus pharetra. Nam
                              ultrices ipsum eu ante rhoncus finibus. Sed arcu ex, condimentum sed augue egestas, condimentum
                              mollis erat. Sed ornare, nunc ut aliquam imperdiet, sem erat hendrerit odio, eget semper risus diam
                              eget ipsum. Maecenas bibendum dignissim diam, at maximus nisi vestibulum tincidunt. Maecenas in
                              dignissim lorem. Cras ullamcorper tristique consectetur. Quisque congue facilisis enim. Nullam
                              consequat semper purus id finibus. Vestibulum vestibulum enim eget mauris ornare fermentum. Nullam
                              ipsum massa, ultricies quis molestie id, feugiat volutpat magna. className aptent taciti sociosqu ad
                              litora torquent per conubia nostra, per inceptos himenaeos. Nunc dignissim velit sed posuere
                              egestas. Curabitur varius dui eu sem hendrerit malesuada.
                              </p>
                              <img className="align-right" width="450" src={ia5} alt=""/>

                                  <h3>Duis sollicitudin pretium sapien vel hendrerit.</h3>

                                  <p>
                                  Nunc posuere bibendum felis, vitae viverra erat ornare ac. Pellentesque ullamcorper metus eu libero
                                  hendrerit feugiat non vitae erat. Proin tincidunt dignissim lacus non egestas. Curabitur congue dui
                                  nec massa sollicitudin dictum. Nulla condimentum id metus id imperdiet. Aliquam tempor sed justo
                                  semper finibus. Duis mollis, elit quis vehicula elementum, purus purus tempor tellus, vitae tempus
                                  arcu eros vitae mauris. Maecenas et blandit mauris.Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Maecenas luctus placerat felis at mattis. Vivamus iaculis dapibus pharetra. Nam
                                  ultrices ipsum eu ante rhoncus finibus. Sed arcu ex, condimentum sed augue egestas, condimentum
                                  mollis erat. Sed ornare, nunc ut aliquam imperdiet, sem erat hendrerit odio, eget semper risus diam
                                  eget ipsum. Maecenas bibendum dignissim diam, at maximus nisi vestibulum tincidunt. Maecenas in
                                  dignissim lorem. Cras ullamcorper tristique consectetur. Quisque congue facilisis enim. Nullam
                                  consequat semper purus id finibus. Vestibulum vestibulum enim eget mauris ornare fermentum. Nullam
                                  ipsum massa, ultricies quis molestie id, feugiat volutpat magna. className aptent taciti sociosqu ad
                                  litora torquent per conubia nostra, per inceptos himenaeos. Nunc dignissim velit sed posuere
                                  egestas. Curabitur varius dui eu sem hendrerit malesuada.
                                  </p>

                                  <div className="clearfix"></div>
                              </section>
                          </div>
                          <div className="scrollToTop">
                              <i className="fa fa-angle-up" aria-hidden="true"></i>
                          </div>
                      </section>
                      <footer className="footer" id="footer-bottom">
                          <div className="container">
                              <div className="copyright">Copyright <i className="fa fa-copyright"></i> All Right Reserved 2015
                                  <strong>RAVAZE</strong></div>
                          </div>
                      </footer>
                  </div>
                   </div>
  );
}


export default displayBlank;
