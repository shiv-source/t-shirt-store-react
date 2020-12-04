import React from "react";
import { Row, Col, Card, CardImg , Button} from "reactstrap";
import "./Details.css";
import { Link  } from "react-router-dom";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const renderProduct = () => {
        let product = this.props.product;

        console.log(product)
        if(product !== null || undefined ){
          return(
            <div className="container">
            <div className="mt-5" id="viewImg">
              <Row>
                <Col>
                  <Card>
                    <CardImg src={product.imgURL} />
                  </Card>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <h1> {product.name}</h1>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col> <h5> Price : $ <b> {product.price} </b>  </h5>  </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col> <h5> Color :  <b> {product.color} </b>  </h5>  </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col> <h5> Type :  <b> {product.type} </b>  </h5>  </Col>
                  </Row>
  
                  <Row className="mt-2">
                    <Col> <h5> Description :  </h5> <p className="mt-2"> {product.description} </p> </Col>
                  </Row>
                  <Row>
                    <Col sm={3} > <Button color="danger" onClick={ this.props.onClickAdd } className="ml-2" > Add To Cart </Button></Col>
                    <Col sm={3}>  <Button color="danger" onClick={ this.props.onClickRemove } className="ml-2" > Remove From Cart </Button></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          )

        }


        else{
          return (<div></div>)
        }
      }

  console.log(this.props.product)
    return (
      <div className="productDetails">
       {renderProduct()}
      </div>
    );
  }
}

export default Details;


