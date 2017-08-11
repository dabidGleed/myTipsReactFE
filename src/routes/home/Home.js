

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';



const title = 'Sb Admin React';
const i1 = require("../../components/common/img/1.jpg");
const i2 = require("../../components/common/img/2.jpg");
const i3 = require("../../components/common/img/3.jpg");
const i4 = require("../../components/common/img/4.jpg");
const i5 = require("../../components/common/img/5.jpg");
const i6 = require("../../components/common/img/6.jpg");
const i7 = require("../../components/common/img/7.jpg");
const i8 = require("../../components/common/img/8.jpg");
const i9 = require("../../components/common/img/9.jpg");
const i10 = require("../../components/common/img/10.jpg");
const i11 = require("../../components/common/img/11.jpg");
const i12 = require("../../components/common/img/12.jpg");
const ip1 = require("../../components/common/img/product/1.jpg");
const ip2 = require("../../components/common/img/product/2.jpg");
const ip3 = require("../../components/common/img/product/3.jpg");
const iacover = require("../../components/common/img/article/cover.jpg");



function Home(props, context) {
  return (
    <div className="home">
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
			<div className="container">
				<div className="slider">
					<div id="header-slider">
						<div className="swiper-container">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="article article-style-1">
										<div className="article-images col-md-12 col-md-12 col-xs-12">
											<a href="#"><img src={i8} alt="" /></a>

											<div className="article-data">
												<ul>
													<li><i className="fa fa-comment"></i>12 Comment</li>
													<li><i className="fa fa-eye"></i>321 Views</li>
													<li><i className="fa fa-clock-o"></i>02-12-2015</li>
													<li><i className="fa fa-user"></i>By Zavar</li>
												</ul>
											</div>
										</div>
										<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
											<div className="title-and-excerpt">
												<div className="article-title">
													<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
												</div>
												<div className="article-excerpt">
													 Maecenas rhoncus velit sit amet turpis tempor pharetra. Nam non elit ante. Praesent fermentum id lorem pretium interdum. Nam nec ex a felis blandit dignissim.Mauris sed nunc metus. Vivamus dolor augue
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="article article-style-1">
										<div className="article-images col-md-12 col-md-12 col-xs-12">
											<a href="#"><img src={i9} alt=""/></a>

											<div className="article-data">
												<ul>
													<li><i className="fa fa-comment"></i>12 Comment</li>
													<li><i className="fa fa-eye"></i>321 Views</li>
													<li><i className="fa fa-clock-o"></i>02-12-2015</li>
													<li><i className="fa fa-user"></i>By Zavar</li>
												</ul>
											</div>
										</div>
										<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
											<div className="title-and-excerpt">
												<div className="article-title">
													<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
												</div>
												<div className="article-excerpt">
													 Maecenas rhoncus velit sit amet turpis tempor pharetra. Nam non elit ante. Praesent fermentum id lorem pretium interdum. Nam nec ex a felis blandit dignissim.Mauris sed nunc metus. Vivamus dolor augue
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="article article-style-1">
										<div className="article-images col-md-12 col-md-12 col-xs-12">
											<a href="#"><img src={i10} alt=""/></a>

											<div className="article-data">
												<ul>
													<li><i className="fa fa-comment"></i>12 Comment</li>
													<li><i className="fa fa-eye"></i>321 Views</li>
													<li><i className="fa fa-clock-o"></i>02-12-2015</li>
													<li><i className="fa fa-user"></i>By Zavar</li>
												</ul>
											</div>
										</div>
										<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
											<div className="title-and-excerpt">
												<div className="article-title">
													<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
												</div>
												<div className="article-excerpt">
													 Maecenas rhoncus velit sit amet turpis tempor pharetra. Nam non elit ante. Praesent fermentum id lorem pretium interdum. Nam nec ex a felis blandit dignissim.Mauris sed nunc metus. Vivamus dolor augue
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="article article-style-1">
										<div className="article-images col-md-12 col-md-12 col-xs-12">
											<a href="#"><img src={i11} alt=""/></a>

											<div className="article-data">
												<ul>
													<li><i className="fa fa-comment"></i>12 Comment</li>
													<li><i className="fa fa-eye"></i>321 Views</li>
													<li><i className="fa fa-clock-o"></i>02-12-2015</li>
													<li><i className="fa fa-user"></i>By Zavar</li>
												</ul>
											</div>
										</div>
										<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
											<div className="title-and-excerpt">
												<div className="article-title">
													<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
												</div>
												<div className="article-excerpt">
													 Maecenas rhoncus velit sit amet turpis tempor pharetra. Nam non elit ante. Praesent fermentum id lorem pretium interdum. Nam nec ex a felis blandit dignissim.Mauris sed nunc metus. Vivamus dolor augue
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="article article-style-1">
										<div className="article-images col-md-12 col-md-12 col-xs-12">
											<a href="#"><img src={i12} alt=""/></a>

											<div className="article-data">
												<ul>
													<li><i className="fa fa-comment"></i>12 Comment</li>
													<li><i className="fa fa-eye"></i>321 Views</li>
													<li><i className="fa fa-clock-o"></i>02-12-2015</li>
													<li><i className="fa fa-user"></i>By Zavar</li>
												</ul>
											</div>
										</div>
										<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
											<div className="title-and-excerpt">
												<div className="article-title">
													<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
												</div>
												<div className="article-excerpt">
													 Maecenas rhoncus velit sit amet turpis tempor pharetra. Nam non elit ante. Praesent fermentum id lorem pretium interdum. Nam nec ex a felis blandit dignissim.Mauris sed nunc metus. Vivamus dolor augue
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-button-next swiper-button-white header-slider-next visible-lg visible-md">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</div>
						<div className="swiper-button-prev swiper-button-white header-slider-prev visible-lg visible-md">
							<i className="fa fa-angle-left" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
			<section className="container">
			<div className="sticky-left col-md-8 no-padding">
				<div className="content">
					<div className="col-md-12 no-padding">
						<div className="article-video">
							<div className="article-video-embed ">
								<iframe height="315" src="https://www.youtube.com/embed/-l1AZA5mWeo?ecver=1" allowFullScreen></iframe>
							</div>
							<div className="article-video-title">
								<h5>Latest Youtube Video -  My Travel Vlog	</h5>
								<div className="subscribe-btn"><a href="#youtube-channel-url"><i className="fa fa-youtube-play" aria-hidden="true"></i>Subscribe to channel</a></div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12 col-sm-12 col-xs-12 no-padding">
								<a href="#"><img src={i1} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim neque mauris, sit amet cursus diam cursus at. Cras a ultricies ipsum. Vestibulum ornare ipsum pretium arcu pretium tempor. Suspendisse imperdiet est id quam gravida convallis.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12">
								<a href="#"><img src={i2} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										 Maecenas rhoncus velit sit amet turpis tempor pharetra. Nam non elit ante. Praesent fermentum id lorem pretium interdum. Nam nec ex a felis blandit dignissim.Mauris sed nunc metus. Vivamus dolor augue
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12">
								<a href="#"><img src={i3} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										ullamcorper sit amet turpis quis, pretium mattis lorem. Praesent vehicula orci eu massa posuere, id aliquam nisi pharetra. Pellentesque gravida facilisis magna. Pellentesque a neque non mi tincidunt fringilla.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12">
								<a href="#"><img src={i4} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non mauris non erat feugiat consequat nec id enim. Nullam ac tristique risus. Quisque congue nisl ac nunc aliquet, ultrices pellentesque arcu sagittis.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12">
								<a href="#"><img src={i5} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										Vivamus at porttitor magna. Praesent non tristique sapien. Duis eu vestibulum turpis. Praesent elementum est id nunc congue laoreet.Sed dictum, dui vitae ultrices vestibulum, eros augue sodales purus, et dignissim enim dolor in sapien.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12">
								<a href="#"><img src={i6} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										Vivamus at porttitor magna. Praesent non tristique sapien. Duis eu vestibulum turpis. Praesent elementum est id nunc congue laoreet.Sed dictum, dui vitae ultrices vestibulum, eros augue sodales purus, et dignissim enim dolor in sapien.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12">
								<a href="#"><img src={i7} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										Vivamus at porttitor magna. Praesent non tristique sapien. Duis eu vestibulum turpis. Praesent elementum est id nunc congue laoreet.Sed dictum, dui vitae ultrices vestibulum, eros augue sodales purus, et dignissim enim dolor in sapien.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-md-6  col-xs-12  no-padding">
						<div className="article article-style-1">
							<div className="article-images col-md-12 col-md-12 col-xs-12">
								<a href="#"><img src={i8} alt=""/></a>

								<div className="article-data">
									<ul>
										<li><i className="fa fa-comment"></i>12 Comment</li>
										<li><i className="fa fa-eye"></i>321 Views</li>
										<li><i className="fa fa-clock-o"></i>02-12-2015</li>
										<li><i className="fa fa-user"></i>By Zavar</li>
									</ul>
								</div>
							</div>
							<div className="article-title-excerpt-wrap col-md-12 col-md-12 col-xs-12">
								<div className="title-and-excerpt">
									<div className="article-title">
										<a href="#"><span>Lorem ipsum dolor sit amet</span></a>
									</div>
									<div className="article-excerpt">
										Vivamus at porttitor magna. Praesent non tristique sapien. Duis eu vestibulum turpis. Praesent elementum est id nunc congue laoreet.Sed dictum, dui vitae ultrices vestibulum, eros augue sodales purus, et dignissim enim dolor in sapien.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="loadmore load-more">Load More Post</div>
				</div>
			</div>
			<div className="sticky-right col-md-4 no-padding">
				<div className="sidebar">
					<div className="sidebar-box no-padding">
						<div className="profile-header">
							<div className="profile-image">
								<a href={iacover} data-lightbox="example-set">
									<img src={iacover} alt="" />
								</a>
							</div>
						</div>
						<div className="profile-details">
							<h3>Ravaze Patika Theme</h3>
							 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi.
							<div className="social">
								<ul>
									<li><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram"></i></a></li>
									<li><a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube"></i></a></li>
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
							<li><a href="#"><span className="badge">14</span> Cras justo odio </a></li>
							<li><a href="#"><span className="badge">23</span> Dapibus ac facilisis in</a> </li>
							<li><a href="#"><span className="badge">32</span> Morbi leo risus </a></li>
							<li><a href="#"><span className="badge">14</span> Cras justo odio </a></li>
							<li><a href="#"><span className="badge">12</span> Dapibus ac facilisis in </a></li>
							<li><a href="#"><span className="badge">12</span> Dapibus ac facilisis in </a></li>
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
									<h1>BY Ravaze <span>3 Days Ago</span></h1>
									<span className="latest-comments-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi. </span>
								</div>
							</div>
							<div className="item">
								<div className="latest-comments">
									<i className="fa fa-comments"></i>
									<h1>BY Ravaze <span>5 Days Ago</span></h1>
									<span className="latest-comments-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu neque, aliquet fermentum ullamcorper a, suscipit non sapien. Cras vel turpis at massa vulputate viverra a id nisi. </span>
								</div>
							</div>
							<div className="item">
								<div className="latest-comments">
									<i className="fa fa-comments"></i>
									<h1>BY Ravaze <span>7 Days Ago</span></h1>
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
									 <a href="#"><img src={i1} alt="" /></a>
									 </div>

									 <div className="product-carousel-price">24 $ </div>

									 <div className="product-carousel-name"><a href="#"><h5>Lorem ipsum dolor sit amet</h5></a></div>

									 <div className="product-carousel-add-btn"><a href="#">Add the cart</a></div>
								</div>
							</div>
							<div className="item">
								<div className="product-carousel">
									 <div className="product-carousel-image">
									 <a href="#"><img src={i2} alt="" /></a>
									 </div>

									 <div className="product-carousel-price">24 $ </div>

									 <div className="product-carousel-name"><a href="#"><h5>Lorem ipsum dolor sit amet</h5></a></div>

									 <div className="product-carousel-add-btn"><a href="#">Add the cart</a></div>
								</div>
							</div>
							<div className="item">
								<div className="product-carousel">
									 <div className="product-carousel-image">
									 <a href="#"><img src={i3} alt="" /></a>
									 </div>

									 <div className="product-carousel-price">24 $ </div>

									 <div className="product-carousel-name"><a href="#"><h5>Lorem ipsum dolor sit amet</h5></a></div>
									 <div className="product-carousel-add-btn"><a href="#">Add the cart</a></div>
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
					<div className="copyright">Copyright <i className="fa fa-copyright"></i> All Right Reserved 2017 <strong>RAVAZE</strong></div>
				</div>
			</footer>
		</div>

	</div>
  );
}



export default Home;
