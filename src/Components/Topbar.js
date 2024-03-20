import React from 'react'
import '../css/colors.css'
import '../css/plugins.css'
import '../css/style.css'
import dark from '../img/logo/dark.png'

function Topbar() {
  return (
    <div class="ryker_tm_topbar">
		<div class="topbar_inner">
			<div class="logo">
				<a href="#"><img src={dark} alt="" /></a>
			</div>
			<div class="menu">
				<div class="list">
					<ul class="anchor_nav">
						<li class="current"><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#service">Services</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#news">News</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
				<div class="trigger">
					<div class="hamburger hamburger--slider">
						<div class="hamburger-box">
							<div class="hamburger-inner"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Topbar