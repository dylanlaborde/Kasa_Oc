import "./Banner.css";

function Banner({ image, textContent }) {
  return (
    <div className="bannerContainer">
      <img src={image} alt="kasa acceuil" />
      {textContent ? <span>{textContent}</span> : null}
    </div>
  );
}

export default Banner;
