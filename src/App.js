import React from "react";
import { BookProvider } from "./Component/BookContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";
import CartItem from "./Component/Cart";
import Navbars from "./Component/Navbar";
import Product from "./Component/Product";
import Details from "./Component/Details";
import Default from "./Component/Default";
import Contact from "./Component/Contact";
import AboutUs from "./Component/AboutUs";
import Footer from './MainPage/Footer'
function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbars />
        <Switch>
          <Route path="/product/" component={Product} />
          <Route path="/product/:id" component={Details} />    
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={CartItem} />
          <Route component={Default} />
        </Switch>
        <Footer/>
      </BookProvider>
    </div>
  );
}

export default App;
