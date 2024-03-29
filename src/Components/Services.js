import React, { useEffect } from 'react'
import '../css/colors.css';
import '../css/plugins.css';
import '../css/style.css';
import design from '../img/svg/design.svg'
import code from '../img/svg/code.svg'
import award from '../img/svg/award.svg'
import tools from '../img/svg/tools.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Services() {
	useEffect(()=>{
		AOS.init({duration:1000})
	  },[])
  return (
    <div class="ryker_tm_section" id="service">
		<div class="ryker_tm_services">
			<div class="container">
				<div class="services_inner">
					<div class="left">
						<div class="ryker_tm_title">
							<span>Services</span>
							<h3>I offer a Full-cycle of Web Development Services</h3>
						</div>
						<div class="text">
							<p>For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation programming language, and Full Stack developers to deliver cost-effective solutions.</p>
						</div>
						<div class="ryker_progress">
							<div class="progress_inner" data-value="95">
								<span><span class="label">HTML &amp; CSS</span><span class="number">95%</span></span>
								<div class="background"><div class="bar"><div class="bar_in"></div></div></div>
							</div>
							<div class="progress_inner" data-value="80" >
								<span><span class="label">JavaScript</span><span class="number">80%</span></span>
								<div class="background"><div class="bar"><div class="bar_in"></div></div></div>
							</div>
							<div class="progress_inner" data-value="90">
								<span><span class="label">WordPress</span><span class="number">90%</span></span>
								<div class="background"><div class="bar"><div class="bar_in"></div></div></div>
							</div>
						</div>
					</div>
					<div class="right" data-aos="fade-up">
						<ul class="grid">
							<li class="grid-item wow fadeInUp" data-wow-duration="1.5s">
								<div class="list_inner">
									<img class="svg" src={design} alt="" />
									<h3 class="title">Design</h3>
								</div>
							</li>
							<li class="grid-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
								<div class="list_inner">
									<img class="svg" src={code} alt="" />
									<h3 class="title">Development</h3>
								</div>
							</li>
							<li class="grid-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
								<div class="list_inner">
									<img class="svg" src={award} alt="" />
									<h3 class="title">Quality</h3>
								</div>
							</li>
							<li class="grid-item wow fadeInUp" data-wow-duration="1.5s" >
								<div class="list_inner">
									<img class="svg" src={tools} alt="" />
									<h3 class="title">Maintain</h3>
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

export default Services