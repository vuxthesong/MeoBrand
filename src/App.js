import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/MeoBrand/" element={<Home />} />
        <Route path="/MeoBrand/products" element={<Products />} />
        <Route path="/MeoBrand/product/:id" element={<Product />} />
        <Route path="/MeoBrand/cart" element={<Cart />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
