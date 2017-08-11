
import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';


const title = 'Table';
const p1 = require('../../../components/common/img/product/1.jpg')
const p2 = require('../../../components/common/img/product/2.jpg')
const p3 = require('../../../components/common/img/product/3.jpg')
const c1 = require('../../../components/common/img/article/cover.jpg')


function displayTable(props, context) {
  context.setTitle(title);
  return (
    <div className="page">
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
						<section className="page-content-inside" >
						 <h1>This is an Example Heading 1 Element Wrapping Onto Multiple Lines</h1>

						<p>Passepartout was delighted. His master's' last exploit, the consequences of which he ignored, enchanted him. Never had the crew seen so jolly and dexterous a fellow. He formed warm friendships with the sailors, and amazed them with his acrobatic feats.
						  He thought they managed the vessel like gentlemen, and that the stokers fired up like heroes. His loquacious good-humour infected everyone.</p>

						<h2>This is an Example Heading 2 Element Wrapping Onto Multiple Lines</h2>

						<p>He had forgotten the past, its vexations and delays. He only thought of the end, so nearly accomplished; and sometimes he boiled over with impatience, as if heated by the furnaces of the Henrietta. Often, also, the worthy fellow revolved around Fix,
						  looking at him with a keen, distrustful eye; but he did not speak to him, for their old intimacy no longer existed.</p>

						<h3>This is an Example Heading 3 Element Made Long Enough To Wrap Onto Multiple Lines</h3>

						<p>Fix, it must be confessed, understood nothing of what was going on. The conquest of the Henrietta, the bribery of the crew, Fogg managing the boat like a skilled seaman, amazed and confused him. He did not know what to think.</p>

						<h4>This is an Example Heading 4 Element Also Made Long Enough To Wrap Onto Multiple Lines</h4>

						<p>For, after all, a man who began by stealing fifty-five thousand pounds might end by stealing a vessel; and Fix was not unnaturally inclined to conclude that the Henrietta under Fogg's co'mmand, was not going to Liverpool at all, but to some part of
						  the world where the robber, turned into a pirate, would quietly put himself in safety. The conjecture was at least a plausible one, and the detective began to seriously regret that he had embarked on the affair.</p>

						<h5>This is an Example Heading 5 Element and it Takes a Few Extra Words to Make This Long Enough To Wrap Onto Multiple Lines</h5>

						<p>As for Captain Speedy, he continued to howl and growl in his cabin; and Passepartout, whose duty it was to carry him his meals, courageous as he was, took the greatest precautions. Mr. Fogg did not seem even to know that there was a captain on board.</p>

						<h6>This is an Example Heading 6 Element and it Takes Even More Extra Words to Make This Long Enough To Push it Out Onto Multiple Lines</h6>

						<p>On the  they passed the edge of the Banks of Newfoundland, a dangerous locality; during the winter, especially, there are frequent fogs and heavy gales of wind. Ever since the evening before the barometer, suddenly falling, had indicated an approaching
						  change in the atmosphere; and during the night the temperature varied, the cold became sharper, and the wind veered to the south-east.</p>

						<h1>Heading 1 Example</h1>

						<h2>Heading 2 Example</h2>

						<h3>Heading 3 Example</h3>

						<h4>Heading 4 Example</h4>

						<h5>Heading 5 Example</h5>

						<h6>Heading 6 Example</h6>

						<p>This was a misfortune. Mr. Fogg, in order not to deviate from his course, furled his sails and increased the force of the steam; but the vessel's speed slackened, owing to the state of the sea, the long waves of which broke against the stern. She
						  pitched violentl'y, and this retarded her progress. The breeze little by little swelled into a tempest, and it was to be feared that the Henrietta might not be able to maintain herself upright on the waves.</p>
						  <code>This was a misfortune. Mr. Fogg, in order not to deviate from his course, furled his sails and increased the force of the steam; but the vessel's speed slackened, owing to</code>
						  <pre>This was a misfortune. Mr. Fogg, in order not to deviate from his course, furled his sails and increased the force of the steam; but the vessel's speed slackened, owing to</pre>
							<div className="clearfix"></div>
						</section>
					</div>
					<div className="sticky-right col-md-4 no-padding">
							<div className="sidebar">
								<div className="sidebar-box no-padding">
									<div className="profile-header">
										<div className="profile-header-image"></div>
										<div className="profile-image">
												<img src={c1} />

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
												 <a href="#"><img src={p1} alt="" /></a>
												 </div>
												 <div className="product-carousel-price">24 $ </div>
												 <div className="product-carousel-name"><a href="#"><h5>Lorem ipsum dolor sit amet</h5></a></div>
												 <div className="product-carousel-add-btn"><a href="#">Add the cart</a></div>
											</div>
										</div>
										<div className="item">
											<div className="product-carousel">
												 <div className="product-carousel-image">
												 <a href="#"><img src={p1} alt="" /></a>
												 </div>
												 <div className="product-carousel-price">24 $ </div>
												 <div className="product-carousel-name"><a href="#"><h5>Lorem ipsum dolor sit amet</h5></a></div>
												 <div className="product-carousel-add-btn"><a href="#">Add the cart</a></div>
											</div>
										</div>
										<div className="item">
											<div className="product-carousel">
												 <div className="product-carousel-image">
												 <a href="#"><img src={p3} alt="" /></a>
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


displayTable.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayTable;
