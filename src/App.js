import React, {Component} from 'react';
import './App.scss';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 

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
    scroll.scrollTo(667);
  }

  render() {
    return (
      <div className="wrapper">
       <div className="header">
         <div className="mobile-home">
         Hello, I'm <text className="name">William Ting</text>. <br></br> I'm a fullstack web developer.
         <div className="btn" onClick={this.scrollTo}>View my work <i className="fas fa-arrow-right"></i></div>
         </div>
       
       </div>
       <div className="abt-sct">
         <div className="title">ABOUT <br></br> <div className="line">_____</div>
         
         <div className="box-1">box1</div>
         <div className="box-2">box2</div>
         <div className="box-3">box3</div>
         <div className="box-4">box4</div>
         <div className="box-5">box5</div>
         
         </div>
       </div>
       <div className="projects">Project-Section<div className="real-estate">REAL ESTATE APP</div></div>
       
      </div>
    );
  }
 
}

export default App;
