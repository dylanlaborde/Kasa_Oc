import React from 'react'
import './Logement.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LogementWrapper from '../../components/LogementWrapper/LogementWrapper'

function Logement() {
  return (
    <div className='main'>
      <Header />
      <LogementWrapper />
      <Footer/>
    </div>
  )
}

export default Logement