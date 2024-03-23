import sprite from "assets/icons/sprite.svg";

const Van3Icon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-van3`}></use>
    </svg>
  );
};

export default Van3Icon;
