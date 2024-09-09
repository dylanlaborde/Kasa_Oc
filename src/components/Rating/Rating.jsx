import React from "react";
import activeStars from "../../assets/star-active.png";
import inactive from "../../assets/star-inactive.png";

function Rating({ rate }) {
  const maxRating = [...Array(5).keys()];
  return (
    <div className="rating">
      {maxRating.map((number, i) =>
        rate >= number ? (
          <img src={activeStars} alt="active" key={i} />
        ) : (
          <img src={inactive} alt="inactive" key={i} />
        )
      )}
    </div>
  );
}

export default Rating;
