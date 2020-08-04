import React, { Component } from "react";
import Greeting from "../Greeting/Greeting";
import Helloworld from "../Helloworld/Helloworld";
import About from "../About/About";
import Connections from "../Connections/Connections";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <section className="side2">
          <div className="main-container">
            <Greeting />
            <Helloworld handleThemeChange={this.props.handleThemeChange} />
          </div>
        </section>
        <section className="side1">
          <div className="main-container">
            <About />
          </div>
        </section>
        <section className="side2">
          <div className="main-container">
            <Connections />
          </div>
        </section>
        <section className="side1">
          <div className="main-container">
            <Projects />
          </div>
        </section>
        <section className="side2">
          <div className="main-container">
            <Contact />
          </div>
        </section>
        <section className="side2">
          <div className="main-container">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}