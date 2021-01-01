import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import "./Login.css";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-5" id="login">
        <Card className="text-center" >
          <CardHeader >Login Form </CardHeader>
          <CardBody>
            <Form >
              <Row >
                <Label htmlFor="email">Email </Label>
              </Row>
              <Row>
                <input type="email" id="email" className="form-group" />
              </Row>
              <Row>
                <Label htmlFor="password">Password </Label>
              </Row>
              <Row>
                <input type="password" id="password" className="form-group" />
              </Row>
              
                  <Button className="text-center" > Login </Button>
            
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Login;
