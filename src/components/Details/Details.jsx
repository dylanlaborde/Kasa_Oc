import React, { useState } from "react";
import chevron_back from "../../assets/chevron_back.png";
import chevron_up from "../../assets/chevron_up.png";

import "./Details.css";

function Details({ description, equipements }) {
  const [openEquipement, setOpenEquipement] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <>
      {openDescription ? (
        <div className="detailsWrapper detailsWrapper-open">
          <div className="topbar">
            Description
            <img
              src={chevron_up}
              alt="back"
              onClick={() => setOpenDescription(false)}
            />
          </div>
          <div className="description">{description}</div>
        </div>
      ) : (
        <div className="detailsWrapper">
          <div className="topbar">
            Description
            <img
              src={chevron_back}
              alt="back"
              onClick={() => setOpenDescription(true)}
            />
          </div>
          <div className="description"></div>
        </div>
      )}
      {openEquipement ? (
        <div className="detailsWrapper detailsWrapper-open">
          <div className="topbar">
            Equipements
            <img
              src={chevron_up}
              alt="back"
              onClick={() => setOpenEquipement(false)}
            />
          </div>
          <div className="equipements">
            <ul>
              {equipements.map((equipement, i) => (
                <li key={i}>{equipement}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="detailsWrapper">
          <div className="topbar">
            Equipements
            <img
              src={chevron_back}
              alt="back"
              onClick={() => setOpenEquipement(true)}
            />
          </div>
          <div className="equipements"></div>
        </div>
      )}
    </>
  );
}

export default Details;
