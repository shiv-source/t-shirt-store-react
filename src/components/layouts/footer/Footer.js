import React from 'react';
import { Row, Col, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      socail : {
        facebook : "https://facebook.com",
        instagram : "https://facebook.com",
        twitter : "https://facebook.com",
        linkedIn : "https://facebook.com",
      }
    }
  }


  render() {
    return (
      <div className="footer">
        <Row>
          <Col sm={{ size: 3, offset: 1 }}>
            <Row>
              <h3 className="mt-5">Important Links</h3>
            </Row>
            <Row> <NavLink to="/" className="nav-link" >Home </NavLink> </Row>
            <Row> <NavLink to="/about" className="nav-link" >About </NavLink> </Row>
            <Row> <NavLink to="/contact" className="nav-link" > Contact </NavLink> </Row>
            <Row> <NavLink to="/login" className="nav-link" >Login </NavLink> </Row>
          </Col>
          <Col className="social mt-5" > 
              <Row> <h3> Social Links </h3></Row>
              <Row className="mt-3" >
                <Col sm={1} > <a href={this.state.socail.facebook} > <i className="fa fa-facebook fa-lg" ></i> </a></Col>
                <Col sm={1} > <a href={this.state.socail.instagram} > <i className="fa fa-instagram fa-lg" ></i> </a></Col>
                <Col sm={1} > <a href={this.state.socail.twitter} > <i className="fa fa-twitter fa-lg" ></i> </a></Col>
                <Col sm={1} > <a href={this.state.socail.linkedIn} > <i className="fa fa-linkedin fa-lg"></i> </a></Col>
              </Row>
          </Col>
        </Row>
        <p className="text-center">Copyright {this.state.year}. All right reserved</p>
      </div>
    )
  }
}

export default Footer;