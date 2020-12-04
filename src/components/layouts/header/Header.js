import React from "react";
import {
  Nav,
  NavItem,
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <div className="fixed-top">
        <Navbar dark expand="md" id="navbar" color="primary">
          <div className="container">
            <NavLink to="/">
              <NavbarBrand id="navBrand">T-shirt Sell </NavbarBrand>
            </NavLink>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto navigationLinks" navbar>
                <NavItem>
                  <NavLink className="nav-link active ml-3" to="/">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link active ml-3" to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link active ml-3" to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active mt-1 mr-3">
                    <b>Cart : {this.props.cart}</b>
                  </li>
                  <li className="nav-item ml-3">
                    <a
                      className="btn btn-social-icon btn-github"
                      href="https://github.com/shiv-source"
                    >
                      <span className="fa fa-github"></span>
                    </a>
                  </li>
                  <li className="nav-item ml-3">
                    <a
                      className="btn btn-social-icon btn-linkedin"
                      href="https://www.linkedin.com/in/shiv-kumar-73ab56183/"
                    >
                      <span className="fa fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
