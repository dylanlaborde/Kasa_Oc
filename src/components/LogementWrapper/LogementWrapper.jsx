import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../data/useFetchData";
import Carrousel from "../Carrousel/Carrousel";
import Infowrapper from "../InfoWrapper/Infowrapper";
import "./LogementWrapper.css";

function LogementWrapper() {
  const { id } = useParams();
  const datas = useFetchData();
  let currentData = datas.find((data) => data.id === id);
  const pictures = currentData.pictures;
  const pictureLength = currentData.pictures.length;

  return (
    <div className="logement_wrapper">
      <Carrousel pictures={pictures} pictureLength={pictureLength} />
      <Infowrapper data={currentData} />
    </div>
  );
}

export default LogementWrapper;