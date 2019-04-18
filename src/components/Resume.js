import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { condition: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }
  render() {
    return (
      <div className={this.state.condition ? "resume" : "resume menu-active"}>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className="fas fa-bars" />
        </div>
        <section id="menu">
          <nav>
            <NavLink exact to="/components/Work" className="ghost-btn">
              Portfolio
            </NavLink>
            <NavLink onClick={this.handleClick} className="ghost-btn">
              Resume
            </NavLink>
          </nav>
        </section>
        <section className="info-section">
          <div className="logo" onClick={this.handleClick} />
          <div className="info-box">
            <NavLink exact to="/components/Work" className="nav-btn">
              Portfolio
            </NavLink>
            <NavLink exact to="/components/Resume" className="nav-btn">
              Resume
            </NavLink>

            <h4>Email</h4>
            <p>williamting@gmail.com</p>
            <h4>Phone</h4>
            <p>949-829-1403</p>
            <h4>Find Me On</h4>
            <div className="icon-section">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/theweicode/"
              >
                <i className="fab fa-github" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/will-ting-5728b975/"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/theweicode/#"
              >
                <i className="fab fa-codepen" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/users/11133416/will"
              >
                <i className="fab fa-stack-overflow" />
              </a>
            </div>
          </div>
        </section>
        <section className="content-area">
          <div className="scroll-section">
            <div className="category">
              <div className="title">
                <h1>Education</h1>
              </div>
              <div className="xp-section">
                <div className="box degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
                <div className="degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
                <div className="degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
                <div className="degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
              </div>
            </div>
            {/*             Education Ends Here */}
            {/*             Work Experience Starts Here */}
            <div className="category">
              <div className="title">
                <h1>Work Experience</h1>
              </div>
              <div className="xp-section">
                <div className="box degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
                <div className="degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
                <div className="degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
                <div className="degree">
                  <h5>B.A. in International Studies</h5>
                  <p>UNIVERSITY OF CALIFORNIA, IRVINE</p>
                  <p>Session: 2002-2006</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
