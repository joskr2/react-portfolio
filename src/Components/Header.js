import React, { Component } from "react";
import Video_background from "./video.mp4"
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <div >
        <video autoPlay="autoplay" loop="loop" muted className="Video">
          <source src={Video_background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="Content">
          <header id="home">
            <nav id="nav-wrap">
              <a
                className="mobile-btn"
                href="#nav-wrap"
                title="Show navigation"
              >
                Show navigation
              </a>
              <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
              </a>

              <ul id="nav" className="nav">
                <li className="current">
                  <a className="smoothscroll" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#resume">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio">
                    Works
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#testimonials">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">I'm {name}.</h1>
                <h3>
                  I'm a {city} based <span>{occupation}</span>. {description}.
                </h3>
                <hr />
                <ul className="social">{networks}</ul>
              </div>
            </div>

            <p className="scrolldown">
              <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
              </a>
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
