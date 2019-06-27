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
              Mission-driven full stack developer with a passion for thoughtful
              UI Design, collaboration, and teaching.
            </div>
            <div className="para">
              I've always sought out opportunities and challenges that are
              meaningful to me. Although myp professional path has taken many
              twists and turns - from touring and recording artist, to employee
              of the year at a non-profit, to dean's scholar at UPenn, to small
              business owner and entrepreneur - I've never stopped engaging my
              passion to help others and solve problems. <br /> As a web
              developer, I enjoy using my obsessive attention to detail, my
              unequivocal love for making things, and my mission-driven work
              ethic to literally change the world. That's why I'm excited to
              make a big impact at a high growth company.
            </div>
            <div className="btn" onClick={this.scrollToDemos}>
              View live demos <i className="fas fa-arrow-right" />
            </div>
          </div>

          <div className="tech">
            <div className="title">
              TECH STACK <br /> <div className="line" />
            </div>
            <div className="front">Front End</div>
            <div className="back">Back End</div>
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
