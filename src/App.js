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
              Hello, I'm <a className="name">Will Ting</a>. <br /> I'm a
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
              I’m a full stack software developer with professional SQL
              administration and WebOps experience in large corporate and small
              family tech companies. I cut my teeth in IT Support demonstrating
              a long history of customer focus, attention to detail, patience,
              accuracy, and time management. My passion for software developer
              stems from my experience in IT Support, where I realized I wanted
              to make significant differences for my company. I’m well versed in
              the latest front end tech trends including NodeJS, React, Rest
              API, CSS Grid / Flex and many more. I'm excited to make a big
              impact at a high growth company.
            </div>
            <div className="btn" onClick={this.scrollToDemos}>
              View my projects <i className="fas fa-arrow-right" />
            </div>
          </div>
          <div className="backdrop" />
          <div className="tech">
            <div className="title">Real Estate App</div>
            <div className="description-real" />
            <div className="realEstate">
              <img src="https://i.imgur.com/6LZFOVs.png" />
              <h3 className="real-label">Desktop/Laptop</h3>
            </div>
            <div className="realEstateipad">
              <img src="https://i.imgur.com/OmgSk6Y.png" />
              <h3 className="real-label">Tablets</h3>
            </div>
            <div className="realEstateiphone">
              <img src="https://i.imgur.com/tetH7KH.png" />
              <h3 className="real-label">Phones</h3>
            </div>

            <div className="stack">
              Tech Stack <br /> <div className="line" />
            </div>
            <div className="box-1">
              <span>
                <i className="fab fa-node" />
                <div className="label">NodeJS</div>
              </span>
            </div>
            <div className="box-2">
              <i className="fab fa-react" />
              <div className="label">ReactJS</div>
            </div>
            <div className="box-3">
              <i className="fab fa-sass" />
              <div className="label">UI Design</div>
            </div>
            <div className="box-4">
              <i className="fas fa-cloud"> </i>
              <div className="label">RESTful-SQL</div>
            </div>
            <div className="realDesc">
              I build this responsive project from scratch using the latest
              frameworks including NodeJS backend along with ReactJS framework
              and custom the layout using advanced CSS techniques such as
              Flexbox, Grid, transitions, and animations.I also leveraged
              Google's cloud database Firecloud to allow users to login.
            </div>
            <a
              className="btn"
              href="https://master.d716ee3k2f9g4.amplifyapp.com/"
            >
              View live demos <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default App;
