import React, { Component } from "react";

const fr_img = {
  background: `url(https://i.imgur.com/920XY2o.png) no-repeat left top`,
  backgroundSize: "cover"
};

const rs_img = {
  background: `url(https://i.imgur.com/6LZFOVs.png) no-repeat left top`,
  backgroundSize: "cover"
};

const res_img = {
  background: `url(https://i.imgur.com/uLYos7V.png) no-repeat left top`,
  backgroundSize: "cover"
};
const wr_img = {
  background: `url(https://i.imgur.com/W6t4Lay.png) no-repeat left top`,
  backgroundSize: "cover"
};

class Home extends Component {
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
      <div className={this.state.condition ? "work" : "work menu-active"}>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className="fas fa-bars" />
        </div>
        <section id="menu">
          <div className="logo" onClick={this.handleClick} />
          <nav>
            <div onClick={this.handleClick} className="ghost-btn">
              Home
            </div>
            <a
              href="https://drive.google.com/file/d/1EH5w8_8uF004esY8HBXWqi5WouUULm0T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              Resume
            </a>
          </nav>
        </section>
        <section className="info-section">
          <div className="logo" onClick={this.handleClick} />
          <h5 className="intro">
            I'm Will Ting, a Web Developer and this is my portfolio
          </h5>
          <div className="flex-container">
            <i class="fab fa-node-js" />
            <i class="fab fa-html5" />
            <i class="fab fa-sass" />
            <i class="fab fa-react" />
            <i class="fab fa-aws" />
          </div>

          <div className="info-box">
            <a
              href="https://drive.google.com/file/d/1EH5w8_8uF004esY8HBXWqi5WouUULm0T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              Resume
            </a>

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
                href="https://stackoverflow.com/users/11133416/will/"
              >
                <i className="fab fa-stack-overflow" />
              </a>
            </div>
          </div>
        </section>
        <section className="content-area">
          <div className="scroll-section">
            {/*             Work Starts */}
            <div className="work-section">
              <div className="title">
                <div className="skills-img" />
                <h1>Latest Works</h1>
              </div>
              <div className="project-section">
                <a
                  href="https://real-estate-app-front-end.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-box" style={rs_img}>
                    <div className="grey-bg">
                      <div className="project-info">
                        <div className="project-details">
                          Front End Data Filtering & Responsive Layout
                        </div>
                        <div className="project-title">Real Estate App</div>
                        <i class="fas fa-long-arrow-alt-right" />
                        <a href="https://github.com/theweicode/real-estate/">
                          <i class="fab fa-github" /> <h3>Git Hub</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://responsive-app.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-box" style={res_img}>
                    <div className="grey-bg">
                      <div className="project-info">
                        <div className="project-details">
                          4k - desktops - laptops - mobile - tablets
                        </div>
                        <div className="project-title">Responsive App</div>
                        <i class="fas fa-long-arrow-alt-right" />
                        <a href="https://github.com/theweicode/responsive-app/">
                          <i class="fab fa-github" /> <h3>Git Hub</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://wrenchtime.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-box" style={wr_img}>
                    <div className="grey-bg">
                      <div className="project-info">
                        <div className="project-details">
                          Firebase Google Cloud Data
                        </div>
                        <div className="project-title">
                          Wrenchtime Car Maintenance
                        </div>
                        <i class="fas fa-long-arrow-alt-right" />
                        <a href="https://github.com/theweicode/wrenchtime/">
                          <i class="fab fa-github" /> <h3>Git Hub</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://ecommerce-freshgear.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-box" style={fr_img}>
                    <div className="grey-bg">
                      <div className="project-info">
                        <div className="project-details">
                          Fullstack Adonis JS App
                        </div>
                        <div className="project-title">The Last Yeezys</div>
                        <i class="fas fa-long-arrow-alt-right" />
                        <a href="https://github.com/theweicode/ecommercesite-freshgear/">
                          <i class="fab fa-github" /> <h3>Git Hub</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/*             Work Ends */}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
