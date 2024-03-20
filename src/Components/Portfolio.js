import React from 'react'
import "../css/colors.css";
import "../css/plugins.css";
import "../css/style.css";
import portfolio1 from '../img/portfolio/1.jpg'
import portfolio2 from '../img/portfolio/2.jpg'
import portfolio3 from '../img/portfolio/3.jpg'
import portfolio4 from '../img/portfolio/4.jpg'
import portfolio5 from '../img/portfolio/5.jpg'
import portfolio6 from '../img/portfolio/6.jpg'
import portfolio7 from '../img/portfolio/7.jpg'
import portfolio8 from '../img/portfolio/8.jpg'
import portfolio9 from '../img/portfolio/9.jpg'
import thumbs1 from '../img/thumbs/1-1.jpg'
import thumbs4 from '../img/thumbs/4-2.jpg'

function Portfolio() {
  return (
    <div class="ryker_tm_section" id="portfolio">
		<div class="ryker_tm_portfolio">
			<div class="container">
				<div class="portfolio_inner">
					<div class="ryker_tm_title">
						<span>Portfolio</span>
						<h3>Each project is a unique piece of development</h3>
					</div>
					<div class="portfolio_list">
						<ul class="gallery_zoom">
							<li class="wow fadeInUp" data-wow-duration="1.5s">
								<div class="list_inner">
									<div class="image">
										<img src={thumbs1} alt="" />
										<div class="main" style={{ backgroundImage: `url(${portfolio1})` }}></div>
									</div>
									<div class="overlay"></div>
									<div class="details">
										<h3>Water Drops</h3>
										<span>Vimeo</span>
									</div>
									<a class="ryker_tm_full_link popup-vimeo" href="https://vimeo.com/312334044"></a>
								</div>
							</li>
							<li class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
								<div class="list_inner">
									<div class="image">
										<img src={thumbs1} alt="" />
										<div class="main" style={{ backgroundImage: `url(${portfolio2})` }}></div>
									</div>
									<div class="overlay"></div>
									<div class="details">
										<h3>Sweet Cherry</h3>
										<span>Youtube</span>
									</div>
									<a class="ryker_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=Amq-qlqbjYA"></a>
								</div>
							</li>
							<li class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
								<div class="list_inner">
									<div class="image">
										<img src={thumbs1} alt="" />
										<div class="main" style={{ backgroundImage: `url(${portfolio3})` }}></div>
									</div>
									<div class="overlay"></div>
									<div class="details">
										<h3>Red Nike</h3>
										<span>Soundcloud</span>
									</div>
									<a class="ryker_tm_full_link soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252739311&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></a>
								</div>
							</li>
							<li class="wow fadeInUp" data-wow-duration="1.5s">
								<div class="list_inner">
									<div class="image">
										<img src={thumbs1} alt="" />
										<div class="main" style={{ backgroundImage: `url(${portfolio6})` }}></div>
									</div>
									<div class="overlay"></div>
									<div class="details">
										<h3>Blue Lemon</h3>
										<span>Detail</span>
									</div>
									<a class="ryker_tm_full_link popup_info" href="#"></a>
								</div>
								
								 {/* Hidden informations for popup begin  */}
								<div class="portfolio_hidden_infos">
									<div class="popup_details">
										<div class="top_image"></div>
										<div class="portfolio_main_title"></div>
										<div class="main_details">
											<div class="textbox">
												<p>The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China. A genomic study of the lemon indicated it was a hybrid between bitter orange and citron.</p>
												<p>The first substantial cultivation of lemons in Europe began in Genoa in the middle of the 15th century. The lemon was later introduced to the Americas in 1493 when Christopher Columbus brought lemon seeds to Hispaniola on his voyages. Spanish conquest throughout the New World helped spread lemon seeds.</p>
											</div>
											<div class="detailbox">
												<ul>
													<li>
														<span class="first">Client</span>
														<span>Alvaro Morata</span>
													</li>
													<li>
														<span class="first">Category</span>
														<span><a href="#">Detail</a></span>
													</li>
													<li>
														<span class="first">Date</span>
														<span>March 07, 2021</span>
													</li>
													<li>
														<span class="first">Share</span>
														<ul class="share">
															<li><a href="#"><img class="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
										<div class="additional_images">
											<ul>
												<li>
													<div class="list_inner">
														<div class="my_image">
															<img src={thumbs4} alt="" />
															<div class="main" style={{ backgroundImage: `url(${portfolio7})` }}></div>
														</div>
													</div>
												</li>
												<li>
													<div class="list_inner">
														<div class="my_image">
															<img src={thumbs4} alt="" />
															<div class="main" style={{ backgroundImage: `url(${portfolio8})` }}></div>
														</div>
													</div>
												</li>
												<li>
													<div class="list_inner">
														<div class="my_image">
															<img src={thumbs4} alt="" />
															<div class="main" style={{ backgroundImage: `url(${portfolio9})` }}></div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								 {/* Hidden informations for popup end */}
								
							</li>
							<li class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
								<div class="list_inner">
									<div class="image">
										<img src={thumbs1} alt="" />
										<div class="main" style={{ backgroundImage: `url(${portfolio5})` }}></div>
									</div>
									<div class="overlay"></div>
									<div class="details">
										<h3>Pantone</h3>
										<span>Image</span>
									</div>
									<a class="ryker_tm_full_link zoom" href={portfolio5}></a>
								</div>
							</li>
							<li class="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
								<div class="list_inner">
									<div class="image">
										<img src={thumbs1} alt="" />
										<div class="main" style={{ backgroundImage: `url(${portfolio4})` }}></div>
									</div>
									<div class="overlay"></div>
									<div class="details">
										<h3>New Telephone</h3>
										<span>Image</span>
									</div>
									<a class="ryker_tm_full_link zoom" href={portfolio4}></a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Portfolio