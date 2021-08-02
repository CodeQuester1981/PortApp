import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

//stickey header
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import logo from "./logo.png";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <StickyHeader
          header={
            <Navbar
              expand="lg"
              fixed="top"
              className={
                "navbar-custom sticky sticky-dark " + this.props.navClass
              }
            >
              <Container>
                <img src={logo} style={{ width: "5%" }} alt="logo" />
                <NavbarBrand
                  className="logo text-uppercase"
                  href="/"
                ></NavbarBrand>
                <NavbarToggler onClick={this.toggle}>
                  <i className="mdi mdi-menu"></i>
                </NavbarToggler>

                <Collapse
                  id="navbarCollapse"
                  isOpen={this.state.isOpenMenu}
                  navbar
                >
                  <ScrollspyNav
                    scrollTargetIds={targetId}
                    scrollDuration="800"
                    headerBackground="true"
                    activeNavClass="active"
                    className="navbar-collapse"
                  >
                    <Nav navbar className="navbar-center" id="mySidenav">
                      {this.props.navItems.map((item, key) => (
                        <NavItem
                          key={key}
                          className={item.navheading === "Home" ? "active" : ""}
                        >
                          <NavLink href={"#" + item.idnm}>
                            {" "}
                            {item.navheading}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                    <div className="nav-button ms-auto">
                      <Nav navbar className="navbar-end">
                        <li>
                          <Button
                            style={{ backgroundColor: "#b44335" }}
                            color="none"
                            type="button"
                            className="btn btn-danger navbar-btn btn-rounded waves-effect waves-light"
                          >
                            Just another button
                          </Button>
                        </li>
                      </Nav>
                    </div>
                  </ScrollspyNav>
                </Collapse>
              </Container>
            </Navbar>
          }
          stickyOffset={-100}
        ></StickyHeader>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
