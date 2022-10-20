import "./App.css";
import NavBar from "./components/header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ProductListContainer from "./components/productContainer/ProductListContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";

// 4- importamos y renderizamos nuestro provider
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductListContainer />} />
            <Route
              path="/categoria/:cat"
              element={<ProductListContainer />}
            ></Route>
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
