import logo from './images/logonike.png'
import Cart from '../cart/Cart'
import './header.css'
import { Link } from "react-router-dom";
const NavBar = () => {
  return(
    <header>
      <Link to="/">
      <img src={logo} className="logo"></img>
      </Link>
      <nav>
        <h1>NIKE SHOES</h1>
        <ul className='navBar-list'>
          <li className='navBar-item'><Link className="list-link" to="/">Productos</Link></li>
          <li className='navBar-item'><Link className="list-link" to="/categoria/lebron">Lebron</Link></li>
          <li className='navBar-item'><Link className="list-link" to="/categoria/jordan">Jordan</Link></li>
          <li className='navBar-item'><Link className="list-link" to="/categoria/giannis">Giannis</Link></li>
          <li className='navBar-item'><Link className="list-link" to="/categoria/kobe">Kobe</Link></li>
          <li className='navBar-item'><Link className="list-link" to="/categoria/paul">Cris paul</Link></li>
          <li className='navBar-item'><Link className="list-link" to="/categoria/kyrie">Kyrie</Link></li>
          
        </ul>
      </nav>
      <Cart />
      
    </header>
  )
}

export default NavBar;