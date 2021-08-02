import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Laduma from "./Laduma";
import RogPost from "./RogPost";
import BigBus from "./BigBus";
import Blog from "./Blog";
import Footer from "../Footer/footer";
import logo from "../Navbar/logo.png";
import ScrollToTop from "./ScrollToTop";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NewsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md" sticky="top">
        <img
          src={logo}
          style={{ width: "5%" }}
          alt="logo"
          className="navbar-brand"
        />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" style={{ color: "antiquewhite" }}>
                HOME
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/news" style={{ color: "antiquewhite" }}>
                NEWS
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Router>
        <ScrollToTop>
          <Switch>
            <div className="contain-blog">
              <Route exact path="/news">
                <Blog />
              </Route>

              <div className="contain-post">
                <Route exact path="/news/0">
                  <BigBus />
                </Route>
              </div>

              <div className="contain-post">
                <Route exact path="/news/1">
                  <RogPost />
                </Route>
              </div>

              <div className="contain-post">
                <Route exact path="/news/2">
                  <Laduma />
                </Route>
              </div>
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;
