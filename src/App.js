import React, { Component } from "react";
import "./App.scss";
import Canvas from "./component/Canvas";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

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
  scrollToAbout() {
    // Somewhere else, even another file
    scroller.scrollTo("about-section", {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }
  scrollToSplash() {
    // Somewhere else, even another file
    scroller.scrollTo("splash-section", {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }
  scrollToProjects() {
    // Somewhere else, even another file
    scroller.scrollTo("project-section", {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }
  scrollTop() {
    scroll.scrollToTop();
  }
  scrollToDemos() {
    scroll.scrollTo(2425);
  }

  scrollToWork() {
    // Somewhere else, even another file
    scroller.scrollTo("project-section", {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="header">
            <Canvas />
            <div className="mobile-home">
              Hello, I'm <span className="name">Will Ting</span>. <br /> I'm a
              fullstack web developer.
              <div className="btn" onClick={this.scrollToAbout}>
                View my work <i className="fas fa-arrow-right" />
              </div>
              {/*  <Canvas /> */}
            </div>
          </div>

          <div className="about">
            <Element name="about-section" />
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
              accuracy, and time management. My passion for software development
              stems from my experience in IT Support, where I realized I wanted
              to make significant differences for my company. I’m well versed in
              the latest front end tech trends including NodeJS, React, Rest
              API, CSS Grid / Flex and many more. I'm excited to make a big
              impact at a high growth company.
            </div>
            <div className="view-proj-btn" onClick={this.scrollToProjects}>
              View my projects
            </div>
          </div>
          <Element name="splash-section" />

          {/* 
          <div className="splash-grid">
            <img
              alt="splash-aspan"
              src="https://i.imgur.com/bM004e2.jpg"
              className="splash-screen"
            />
            <img
              src="https://i.imgur.com/b0sEJQt.png"
              className="logo"
              alt="Will Ting's Logo"
            />
            <div className="title">Looking for your dream home?</div>
            <i
              className="fas fa-angle-double-down"
              onClick={this.scrollToWork}
            />
          </div>
          <div className="desk-splash">
            <div className="title">Looking for your dream home?</div>
            <img
              src="https://i.imgur.com/7fg1N02.jpg"
              alt="desktop splash screen"
              className="desk-splash-img"
            />

            <img
              src="https://i.imgur.com/b0sEJQt.png"
              className="logo"
              alt="Will Ting's Logo"
            />

            <i
              className="fas fa-angle-double-down"
              onClick={this.scrollToWork}
            />
          </div>


 */}

          <div className="backdrop" />

          <div className="tech">
            <Element name="project-section" />
            <img
              src="https://i.imgur.com/b0sEJQt.png"
              className="logo"
              alt="Will Ting's Logo"
            />
            <img
              src="https://i.imgur.com/SDiyTRE.png"
              className="res-dis"
              alt="Responsive layout by Jasmine Ting"
            />

            <div className="title">Real Estate App</div>

            <div className="description-real" />

            <div className="stack">
              BUILT FROM SCRATCH WITH <br /> <div className="line" />
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
              Real Estate App is a solo project build from scratch using the
              latest frameworks including NodeJS backend along with ReactJS
              framework. I'm also well versed in creating fully customized
              layouts using advanced CSS techniques such as Flexbox, Grid,
              transitions, keyframes, and animations. I also utilize Google's
              Cloud Database - Firebase to store data asynchronously.
            </div>
            <a
              className="live-btn"
              href="https://master.d716ee3k2f9g4.amplifyapp.com/"
            >
              View live demo >
            </a>

            <a
              className="github-btn"
              href="https://github.com/theweicode/real-estate"
            >
              View Git Repo >
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default App;
