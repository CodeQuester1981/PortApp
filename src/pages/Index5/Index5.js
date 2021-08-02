import React, { Component } from "react";

import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Service from "../../components/Service/service";
import AboutUs from "../../components/AboutUs/AboutUs";
import WebsiteDesc from "../../components/WebsiteDesc/WebsiteDesc";
import Process from "../../components/Process/Process";
import GetStart from "../../components/GetStart/GetStart";
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";
import Press from "../../components/PressMaterial/Press";

class Index5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "About Us" },
        { id: 3, idnm: "features", navheading: "Tournaments" },
        { id: 6, idnm: "blog", navheading: "News" },
        { id: 7, idnm: "press", navheading: "Press" },
        { id: 8, idnm: "contact", navheading: "Contact" },
      ],
      navClass: "",
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <NavbarPage
          navItems={this.state.navItems}
          navClass={this.state.navClass}
        />

        {/* section */}
        <Section />

        {/* services */}
        <Service sectionClass="" />

        {/* about us */}
        <AboutUs />

        {/* website description */}
        <WebsiteDesc />

        {/* process */}
        <Process />

        {/* get started */}
        <GetStart />

        {/* blog */}
        <Blog />

        <Press />

        {/* contact */}
        <Contact />

        {/* social */}
        <Social />

        {/* footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index5;
