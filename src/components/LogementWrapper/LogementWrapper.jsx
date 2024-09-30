import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Infowrapper from "../InfoWrapper/Infowrapper";
import "./LogementWrapper.css";

function LogementWrapper({ data }) {
  const pictures = data.pictures;
  const pictureLength = pictures.length;
  return (
    <div className="logement_wrapper">
      <Carrousel pictures={pictures} pictureLength={pictureLength} />
      <Infowrapper data={ data } />
    </div>
  );
}
export default LogementWrapper;
