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
    scroll.scrollTo(800);
  }
  scrollTop() {
    scroll.scrollToTop();
  }
  scrollToDemos() {
    scroll.scrollTo(1600);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="header">
            <div className="mobile-home">
              Hello, I'm <text className="name">William Ting</text>. <br /> I'm
              a fullstack web developer.
              <div className="btn" onClick={this.scrollTo}>
                View my work <i className="fas fa-arrow-right" />
              </div>
              <Canvas />
            </div>
          </div>

          <div className="abt-sct">
            <div className="title">
              ABOUT <br /> <div className="line">_____</div>
            </div>
            <div className="box-1">
              <i class="fab fa-node" />
              NodeJS
            </div>
            <div className="box-2">
              <i class="fab fa-react" />
              ReactJS
            </div>
            <div className="box-3">
              <i class="fab fa-sass" />
              UI Design
            </div>
            <div className="box-4">
              <i class="fas fa-database" />
              SQL - RESTful
            </div>
            <div className="box-5" onClick={this.scrollToDemos}>
              View Live Demos <i className="fas fa-arrow-right" />
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
