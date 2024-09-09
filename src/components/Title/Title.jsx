import React from "react";
import "./Title.css";

function Title({ logement }) {
  return (
    <div className="logement__title">
      <h2> {logement.title} </h2>
      <h3> {logement.location} </h3>
    </div>
  );
}

export default Title;
