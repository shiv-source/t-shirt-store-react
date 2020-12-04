import React from "react";
import "./Home.css";
import {
  Jumbotron,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardFooter,
  Form,
} from "reactstrap";
import Products from "../../../shared/products";
import { NavLink } from 'react-router-dom';
 
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Products,
    };
  }





  renderProduct() {
    let products = this.props.products;

    if (products.length > 0) {
      return products.map((product) => {
        return (
          <Col sm={3} className="mt-5" key={product.id}  >
            <Card>
              <NavLink to={`/details/${product.id}`} > <CardImg src={product.imgURL} /> </NavLink>
              
              <CardFooter>
                <div className="text-center">
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <h5> {product.name}</h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b> $ {product.price}</b>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="home">
        <Jumbotron>
          <div className="container">
            <div className="greeting">
              <h2> Welcome to T-shirt sale </h2>
              <p className="mt-5">Best products available with us.</p>
            </div>
          </div>
        </Jumbotron>
        <div className="products">
          <div className="container">
            <Row>{this.renderProduct()}</Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
