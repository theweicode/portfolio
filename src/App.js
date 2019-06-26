import React, { Component } from "react";
import "./App.scss";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import Canvas from "./component/Canvas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Will",
      isActive: false,
      position: 0
    };
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo() {
    scroll.scrollTo(1200);
  }
  scrollTop() {
    scroll.scrollToTop();
  }
  scrollToDemos() {
    scroll.scrollTo(2400);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="header">
            <Canvas />
            <div className="mobile-home">
              Hello, I'm <text className="name">Will Ting</text>. <br /> I'm a
              fullstack web developer.
              <div className="btn" onClick={this.scrollTo}>
                View my work <i className="fas fa-arrow-right" />
              </div>
              {/*  <Canvas /> */}
            </div>
          </div>

          <div className="about">
            <div className="title">
              ABOUT ME <br />
            </div>
            <div className="line" />
            <div className="vert-line" />
            <div className="intro">
              Mission-driven full stack developer with a passion for thoughtful UI
              Design, collaboration, and teaching.
            </div>
            <div className="para">
            I’m a full stack software developer with professional SQL administration and WebOps experience in large corporate and small family tech companies. I cut my teeth in IT Support demonstrating a long history of customer focus, attention to detail, patience, accuracy, and time management. My passion for software developer stems from my experience in IT Support, where I realized I wanted to make significant differences for my company. I’m well versed in the latest front end tech trends including NodeJS, React, Rest API, CSS Grid / Flex and many more.
I'm excited to
              make a big impact at a high growth company.
            </div>
            <div className="btn" onClick={this.scrollToDemos}>
              View my projects <i className="fas fa-arrow-right" />
            </div>
          </div>

          <div className="tech">
            <div className="title">
            Real Estate App <br /> <div className="line" />
            </div>
            <div className="front">Front End</div>
            <div className="back">Back End</div>
            <img src="https://i.imgur.com/6LZFOVs.png" width="375" height="234" className="realEstate" />
            <div className="box-1">
              <span>
                <i class="fab fa-node" />
                <div className="label">NodeJS</div>
              </span>
            </div>
            <div className="box-2">
              <i class="fab fa-react" />
              <div className="label">ReactJS</div>
            </div>
            <div className="box-3">
              <i class="fab fa-sass" />
              <div className="label">UI Design</div>
            </div>
            <div className="box-4">
              <i className="fas fa-cloud"> </i>
              <div className="label">RESTful-SQL</div>
            </div>
            <div className="btn" onClick={this.scrollToDemos}>
              View live demos <i className="fas fa-arrow-right" />
            </div>
          </div>
          <div className="projects">
            Project-Section<div className="real-estate">REAL ESTATE APP</div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
