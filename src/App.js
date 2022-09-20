import './App.css';
import NavBar from './components/navBar/NavBar'
import ProductList from './components/productList/ProductList';
import Counter from './components/clickCounter/Counter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <Counter />
    </div>
  );
}

export default App;
