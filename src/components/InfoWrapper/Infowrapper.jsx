import React from "react";
import Details from "../Details/Details";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";
import Tags from "../Tags/Tags";
import Title from "../Title/Title";
import "./Infowrapper.css";

function Infowrapper({ data }) {
  return (
    <>
      <section className="infoWrapper">
        <div className="titleAndTags">
          <Title logement={data} />
          <Tags tags={data.tags} />
        </div>
        <div className="ownerAndRating">
          <Host host={data.host} />
          <Rating rate={data.rating} />
        </div>
        <div className="details">
          <Details
            description={data.description}
            equipements={data.equipments}
          />
        </div>
      </section>
    </>
  );
}

export default Infowrapper;
