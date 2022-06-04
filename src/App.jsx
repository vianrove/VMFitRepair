import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Request from "./pages/Request";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Login" element={<Login/>}/>
      <Route path="ProductList" element={<ProductList/>}/>
      <Route path="Product" element={<Product/>}/>
      <Route path="Register" element={<Register/>}/>
      <Route path="Request" element={<Request/>}/>
      <Route path="Cart" element={<Cart/>}/>

    </Routes>
  </BrowserRouter>
  //return <Register />;
};

export default App;