import React, { useState } from 'react'
import './Carrousel.css'
import ArrowLeft from '../../assets/arrow_back.png'
import ArrowRight from '../../assets/arrow_forward.png'

export default function Carrousel({ pictures , pictureLenght}) {
  const [index, setIndex] = useState(0);
  const [currentView,setCurentView]=useState(1)
    if (currentView > pictureLenght) {
      setCurentView(1);
      setIndex(0);
    }
    if (currentView <= 0) {
      setCurentView(pictureLenght);
      setIndex(pictureLenght -1);
    }
  function incrementView() {
    setIndex(index + 1)
    setCurentView(currentView + 1);
  }
  function decrementView() {
    setIndex(index - 1)
    setCurentView(currentView - 1);
  }

  return (
    <section className='carrousel'>
      <img src={ArrowLeft} onClick={decrementView} alt="left" className='arrows_left' />
      <img src={ArrowRight} alt="right" className='arrows_right' onClick={incrementView}/>
      <img src={pictures[index]} alt="image1" className='carrousel_img' />
      <div className="viewWrapper" oneClick={incrementView}>
        <span className='currentView'>{currentView}/</span>
        <span className='viewLenght'>{pictureLenght}</span>
      </div>
    </section>
  )
}
