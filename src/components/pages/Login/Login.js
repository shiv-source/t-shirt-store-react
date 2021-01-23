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
import axios from "axios";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
   // alert( JSON.stringify(this.state));
    event.preventDefault();

    let data = this.state;

    axios.post("http://127.0.0.1:3000/user/login", data )
    .then( (res) => {
      alert("You are loggedin successfully");
    })
    .catch((err) => alert("Unable to loggedin"));
       
  }

  handleChange(event) {
    const target =  event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value,
    })
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
                <input type="email" id="email" value={this.state.email} name="email"  onChange={this.handleChange} className="form-group" />
              </Row>
              <Row>
                <Label htmlFor="password">Password </Label>
              </Row>
              <Row>  
                <input type="password" id="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-group" />
              </Row>
              
                  <Button className="text-center" onClick={this.handleSubmit} > Login </Button>
            
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Login;
