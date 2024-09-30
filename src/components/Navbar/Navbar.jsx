import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li className='toHome'><NavLink to='/' ><span>Acceuil</span></NavLink></li>
                <li className='toAbout'><NavLink to='/about'><span>A Propos</span></NavLink></li>
            </ul>    
        </nav>
  )
}

export default Navbar