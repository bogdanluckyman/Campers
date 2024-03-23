import sprite from "assets/icons/sprite.svg";

const AdultsIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} style={{ stroke: "none" }}>
      <use href={`${sprite}#icon-adults`}></use>
    </svg>
  );
};

export default AdultsIcon;
