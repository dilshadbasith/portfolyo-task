import React, { useContext, useEffect } from 'react'
import "../css/colors.css";
import "../css/plugins.css";
import "../css/style.css";
import news1 from '../img/news/1.jpg'
import news2 from '../img/news/2.jpg'
import news3 from '../img/news/3.jpg'
import thumbs4 from '../img/thumbs/4-3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { myContext } from '../Context';

function News() {

	const {user}=useContext(myContext)
	const userServices=user?.services


	useEffect(()=>{
		AOS.init({duration:1000})
	  },[])
  return (
    <div class="ryker_tm_section" id="news">
		<div class="ryker_tm_news">
			<div class="container">
				<div class="ryker_tm_title">
					<span>Services</span>
					<h3>Check out my latest Services</h3>
				</div>
				<div class="news_list">
					<ul>
						{userServices?.map((item)=>(

						<li class="wow fadeInUp" data-aos="fade-up">
							<div class="list_inner">
								<div class="image">
									<img src={thumbs4} alt="" />
									<div class="main" style={{ backgroundImage: `url(${item?.image?.url})` }}></div>
									<a class="ryker_tm_full_link" href="#"></a>
								</div>
								<div class="details">
									<h3 class="title"><a href="#">{item?.name}</a></h3>
									<span>Charge:{item?.charge}</span>
									<span>{item?.desc}</span>
								</div>
								{/* <div class="hide_content">
									<div class="descriptions">
										<p class="bigger">Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
										<p>Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over.</p>
										<p>Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
										<div class="quotebox">
											<p>Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.</p>
										</div>
										<p>Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off.</p>
										<p>The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again.</p>
									</div>
								</div> */}
							</div>
						</li>
						))}
						
					</ul>
				</div>
			</div>
		</div>
	</div>
  )
}

export default News