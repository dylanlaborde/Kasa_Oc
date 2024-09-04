import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li className='toHome'><Link to='/' >Acceuil</Link></li>
                <li className='toAbout'><Link to='/about'>A Propos</Link></li>
            </ul>    
        </nav>
  )
}

export default Navbar