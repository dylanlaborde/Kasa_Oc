import React from "react";
import "./Host.css";

function Host({ host }) {
  const [fistname, lastname] = host.name.split(" ");
  return (
    <div className="logement__host">
      <div className="pictureContainer">
        <img src={host.picture} alt={host.name} className="hostPicture" />
      </div>
      <div className="hostname">
        <span> {fistname} </span>
        <span> {lastname} </span>
      </div>
    </div>
  );
}

export default Host;
