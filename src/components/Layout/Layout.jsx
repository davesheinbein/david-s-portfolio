import React, { Component } from "react";
import Greeting from "../Greeting/Greeting";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact"
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <section className="a">
          <div className="main-container">
            <Greeting />
            <Intro handleThemeChange={this.props.handleThemeChange} />
          </div>
        </section>
        <section className="a">
          <div className="main-container">
            <About />
          </div>
        </section>
        <section className="a">
          <div className="main-container">
            <Projects />
          </div>
        </section>
        <section className="a">
          <div className="main-container">
            <Contact />
          </div>
        </section>
      </div>
    );
  }
}