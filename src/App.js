import "./App.css";
import NavBar from "./components/header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ProductListContainer from "./components/productContainer/ProductListContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/categoria/:cat" element={<ProductListContainer />}></Route>
          <Route path="/detail/:id" element={<ItemDetailContainer />} />    
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
