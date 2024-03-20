import React from 'react'
import '../css/colors.css'
import '../css/plugins.css'
import '../css/style.css'
import video1 from '../video/1.mp4'

function Hero() {
  return (
    <div class="ryker_tm_section" id="home">
		<div class="ryker_tm_hero">
			<div class="container">
				<div class="content">
					<div class="texts">
						<div class="job">
							<video playsinline autoplay muted loop>
								 <source src={video1} type="video/mp4" />
							</video>
							<h3>Senior Designer<br /> &amp; Developer</h3>
						</div>
						<div class="desc">
							<p>Hi, I'm Alan Walker. A passionate Senior Designer and Front-End Developer based In NYC, USA</p>
						</div>
						<div class="short_skills">
							<div class="text">
								<span>High knowledge on<br />softwares</span>
							</div>
							<div class="icons">
								<ul>
									<li><img class="svg" src="img/svg/html.svg" alt="" /></li>
									<li><img class="svg" src="img/svg/css.svg" alt="" /></li>
									<li><img class="svg" src="img/svg/angular.svg" alt="" /></li>
									<li><img class="svg" src="img/svg/bootstrap.svg" alt="" /></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="avatar">
						<div class="image" data-img-url="img/about/4.jpg"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Hero