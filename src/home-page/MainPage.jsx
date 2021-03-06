import MainMenu from "../menu/MainMenu";
import MainSlider from "./SliderSection/MainSlider";
import BikeModels from "./BikeModelsSection/BikeModels";
import UserForm from "../user-page/UserForm";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../cart/Cart";

import ProductDetails from "../products/ProductCard";
import About from "../about/About";
import "./styles/main-page.css";
import ProductWrapper from "../products/ProductWrapper";

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <MainMenu />
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <MainSlider />
            <BikeModels />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products/:typeId/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <ProductWrapper />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <UserForm path="/login" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MainPage;
