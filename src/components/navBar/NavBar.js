import logo from './images/logonike.png'
import Cart from '../cart/Cart'
import './navBar.css'

const NavBar = () => {
  return(
    <header>
      <img src={logo} className="logo"></img>
      <nav>
        <h1>NIKE SHOES</h1>
        <ul className='navBar-list'>
          <li className='navBar-item'><a className="list-link" href="#">Productos</a></li>
          <li className='navBar-item'><a className="list-link" href="#">Productos</a></li>
          <li className='navBar-item'><a className="list-link" href="#">Productos</a></li>
          
        </ul>
      </nav>
      <Cart />
      
    </header>
  )
}

export default NavBar;