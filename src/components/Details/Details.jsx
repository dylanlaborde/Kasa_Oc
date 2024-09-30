import React from "react";
import "./Details.css";
import Dropdown from "../Dropdown/Dropdown";

function Details({ description, equipements }) {
  return (
    <>
      <Dropdown title='description' content={description}/>
      <Dropdown title='equipements' content={<ul>{equipements.map((eq,i)=><li key={i}>{eq}</li>) }</ul>} />
    </>
  )
}
export default Details
