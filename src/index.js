import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Request from "./pages/Request";
import NotFound from './pages/NotFound';
import PassReset from './pages/PassReset';
ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Login" element={<Login/>}/>
      <Route path="ProductList" element={<ProductList/>}/>
      <Route path="Product" element={<Product/>}/>
      <Route path="Register" element={<Register/>}/>
      <Route path="Request" element={<Request/>}/>
      <Route path="Cart" element={<Cart/>}/>
      <Route path="PassReset" element={<PassReset/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);