import sprite from "assets/icons/sprite.svg";

const HobIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-hob`}></use>
    </svg>
  );
};

export default HobIcon;
