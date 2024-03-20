import React from 'react'
import '../css/colors.css'
import '../css/plugins.css'
import '../css/style.css'

function Mobilemenu() {
  return (
    <div class="ryker_tm_mobile_menu">
		<div class="mobile_menu_inner">
			<div class="mobile_in">
				<div class="logo">
					<a href="#"><img src="img/logo/dark.png" alt="" /></a>
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
		<div class="dropdown">
			<div class="dropdown_inner">
				<ul class="anchor_nav">
					<li class="active"><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#service">Services</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#news">News</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
  )
}

export default Mobilemenu