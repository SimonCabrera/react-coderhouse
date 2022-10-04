import "./App.css";
import NavBar from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
