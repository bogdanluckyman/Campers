import sprite from "assets/icons/sprite.svg";

const GasIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-gas`}></use>
    </svg>
  );
};

export default GasIcon;
