import React from 'react'
import { Link } from 'react-router-dom'
import './Thumb.css'


function Thumb({id,cover,title}) {
    return (
        <Link to={'/logement/' + id}>
            <div className='card' >
                <img src={cover} alt={title} />
                <span>{title}</span>
            </div>    
        </Link>
  )
}

export default Thumb