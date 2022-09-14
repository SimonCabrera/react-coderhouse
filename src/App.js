import './App.css';
import NavBar from './components/navBar/NavBar'
import ProductList from './components/productList/ProductList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;
