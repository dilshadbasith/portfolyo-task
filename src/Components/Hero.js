import React from "react";
import "../css/colors.css";
import "../css/plugins.css";
import "../css/style.css";
import video1 from "../video/1.mp4";
import html from "../img/svg/html.svg";
import css from "../img/svg/css.svg";
import angular from "../img/svg/angular.svg";
import bootstrap from "../img/svg/bootstrap.svg";
import about4 from '../img/about/4.jpg'

function Hero() {
  return (
    <div class="ryker_tm_section" id="home">
      <div class="ryker_tm_hero">
        <div class="container">
          <div class="content">
            <div class="texts">
              <div class="job">
                <video playsInline autoPlay muted loop>
                  <source src={video1} type="video/mp4" />
                </video>
                <h3>
                  Senior Designer
                  <br /> &amp; Developer
                </h3>
              </div>
              <div class="desc">
                <p>
                  Hi, I'm Alan Walker. A passionate Senior Designer and
                  Front-End Developer based In NYC, USA
                </p>
              </div>
              <div class="short_skills">
                <div class="text">
                  <span>
                    High knowledge on
                    <br />
                    softwares
                  </span>
                </div>
                <div class="icons">
                  <ul>
                    <li>
                      <img class="svg" src={html} alt="" />
                    </li>
                    <li>
                      <img class="svg" src={css} alt="" />
                    </li>
                    <li>
                      <img class="svg" src={angular} alt="" />
                    </li>
                    <li>
                      <img class="svg" src={bootstrap} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="avatar">
              <div class="image" style={{ backgroundImage: `url(${about4})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
