import React, { useState } from 'react'
import chevron_up from '../../assets/chevron_up.png'
import chevron_back from '../../assets/chevron_back.png'

import './Dropdown.css'

function Dropdown({ title, content }) {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      {
        isOpen ?
          (
            <div className="dropdown dropdown-open ">
          <div className="topbar">
            {title}
            <img
              src={chevron_back}
              alt="back"
              onClick={() => setisOpen(false)}
            />
          </div>
          <div className="dropdownContent">{content}</div>
            </div>
          ) :
          (
            <div className="dropdown ">
            <div className="topbar">
              {title}
              <img
                src={chevron_up}
                alt="back"
                onClick={() => setisOpen(true)}
              />
            </div>
        </div>
          )
    }    
    </>
  )
}

export default Dropdown

