import sprite from "assets/icons/sprite.svg";

const PetrolIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} style={{ stroke: "none" }}>
      <use href={`${sprite}#icon-petrol`}></use>
    </svg>
  );
};

export default PetrolIcon;
