import React from "react";
import "./Tags.css";

function Tags({ tags }) {
  return (
    <div className="logement__tags">
      {tags.map((tag, i) => (
        <div className="logement__tag" key={i}>
          {" "}
          <span>{tag}</span>
        </div>
      ))}
    </div>
  );
}

export default Tags;
