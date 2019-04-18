import React, { Component } from "react";

const project1 = {
  background: `url(https://cdn.dribbble.com/users/14268/screenshots/5395958/reilanding_2x.png) no-repeat center center`
};

const rs_img = {
  background: `url(https://i.imgur.com/6LZFOVs.png) no-repeat center center`
};

const res_img = {
  background: `url(https://i.imgur.com/uLYos7V.png) no-repeat center center`
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
              href="https://docs.google.com/document/d/1E8RLLFEryxaJG-S2Gpt-kPUcl--BtSOawHGYr19ZGng/edit?usp=sharing"
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
          <div className="info-box">
            <a
              href="https://docs.google.com/document/d/1E8RLLFEryxaJG-S2Gpt-kPUcl--BtSOawHGYr19ZGng/edit?usp=sharing"
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
                href="https://stackoverflow.com/users/11133416/will"
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
                      </div>
                    </div>
                  </div>
                </a>
                <div className="project-box" style={project1}>
                  <div className="grey-bg">
                    <div className="project-info">
                      <div className="project-details">
                        Client: Nike Year: 2018 Type: Ecommerce
                      </div>
                      <div className="project-title">The Last Yeezys</div>
                      <i class="fas fa-long-arrow-alt-right" />
                    </div>
                  </div>
                </div>
                <div className="project-box" style={project1}>
                  <div className="grey-bg">
                    <div className="project-info">
                      <div className="project-details">
                        Client: Nike Year: 2018 Type: Ecommerce
                      </div>
                      <div className="project-title">The Last Yeezys</div>
                      <i class="fas fa-long-arrow-alt-right" />
                    </div>
                  </div>
                </div>
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
