import LOGO from '../../assets/LOGO.png'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header() {
  return (
    <header className='header'>
          <div className='LogoContainer' >
              <Link to="/">
                <img src={LOGO} alt="kasa" />
              </Link>
          </div>
          <Navbar/> 
    </header>
  )
}

export default Header