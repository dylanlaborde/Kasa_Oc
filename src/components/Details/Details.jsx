import React from "react";
import "./Details.css";
import Dropdown from "../Dropdown/Dropdown";

function Details({ description, equipements }) {
  return (
    <>
      <Dropdown title='description' content={description}/>
      <Dropdown title='equipements' content={equipements}/>
    </>
  )
}
export default Details
