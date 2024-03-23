import sprite from "assets/icons/sprite.svg";

const CDIcon = ({ width, height }) => {
  return (
    <svg id="fav-icon" width={width} height={height}>
      <use href={`${sprite}#icon-cd`}></use>
    </svg>
  );
};

export default CDIcon;
