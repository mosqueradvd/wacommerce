import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href='/products' className="nav-link">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="/add" className="nav-link">
              Create products
            </a>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h2>Wacommerce</h2>
        <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/products"]} component={ProductsList} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
