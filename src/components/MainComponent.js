import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Header from "./layouts/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "../shared/products";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Products,
      selected : null,
      cart : 0,
    };
  }

  addProduct(){
    this.setState({cart : ( this.state.cart + 1 )});
  }

  removeProduct(){
    if(this.state.cart > 0 ){
      this.setState({cart : ( this.state.cart - 1 )});
    }
    
    else{
      alert("You have no products in cart.")
    }
  }

  render() {
    const HomePage = () => {
      return <Home products={this.state.products} />;
    };

    const ProductWithId = ({match}) => {

      if(parseInt(match.params.id,10) < this.state.products.length ){
        
      
      return(
          <Details onClickAdd={ () => this.addProduct() }
           onClickRemove = { () => this.removeProduct()}  
           product={this.state.products.filter((product) => product.id === parseInt(match.params.id,10))[0]}  />
      );
      }
      else{
        return(<div className="mt-5">
          <h2>404 Page Not Found </h2>
        </div>)
      }
      
    };

    // onSelectedProduct()

    return (


      <div>
        <Header cart = {this.state.cart} />
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route path="/details/:id" component={ProductWithId} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
