import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import ArrowLeft from "../../assets/arrow_back.png";
import ArrowRight from "../../assets/arrow_forward.png";

export default function Carrousel({ pictures, pictureLength }) {
  const [index, setIndex] = useState(0);
  const [currentView, setCurentView] = useState(1);

  useEffect(() => {
    if (currentView > pictureLength) {
      setCurentView(1);
      setIndex(0);
    }
    if (currentView <= 0) {
      setCurentView(pictureLength);
      setIndex(pictureLength - 1);
    }
  }, [currentView, pictureLength]);

  function incrementView() {
    setIndex((prevIndex) => prevIndex + 1);
    setCurentView((prevView) => prevView + 1);
  }

  function decrementView() {
    setIndex((prevIndex) => prevIndex - 1);
    setCurentView((prevView) => prevView - 1);
  }

  return (
    <section className="carrousel">
      <img
        src={ArrowLeft}
        onClick={decrementView}
        alt="left"
        className="arrows_left"
      />
      <img
        src={ArrowRight}
        alt="right"
        className="arrows_right"
        onClick={incrementView}
      />
      <img src={pictures[index]} alt="image1" className="carrousel_img" />
      <div className="viewWrapper" onClick={incrementView}>
        <span className="currentView">{currentView}/</span>
        <span className="viewLenght">{pictureLength}</span>
      </div>
    </section>
  );
}
