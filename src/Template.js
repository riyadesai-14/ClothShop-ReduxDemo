import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/productListing"
import ProductDetail from "./containers/productDetail";
import { Provider } from "react-redux";
import Header from "./containers/Header";
import store from "./redux/store";
function Template() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
         
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route> 404 Not Found!!!</Route>
     
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Template;
