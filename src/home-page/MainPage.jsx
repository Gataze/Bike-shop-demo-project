import MainMenu from "../menu/MainMenu";
import MainSlider from "./SliderSection/MainSlider";
import BikeModels from "./BikeModelsSection/BikeModels";
import { useState } from "react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../cart/Cart";
import ProductsList from "../products/ProductsList";
import ProductDetails from "../products/ProductCard";
import About from "../about/About";





import "./styles/main-page.css";

const MainPage = () => {
  const [activeStyle, setActiveStyle] = useState(false);
  const handleShow = (activeStyle) => {
    setActiveStyle(!activeStyle);
  };

  return (
    <div
      className="main-page-wrapper"
      style={activeStyle ? { top: "260px" } : { top: "0px" }}
    >
      <MainMenu activeStyle={activeStyle} handleShow={handleShow} />
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
            <ProductsList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        
        </Switch>
      </div>
    </div>
  );
};

export default MainPage;
