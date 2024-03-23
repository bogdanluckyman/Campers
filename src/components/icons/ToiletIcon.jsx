import sprite from "assets/icons/sprite.svg";

const ToiletIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-toilet`}></use>
    </svg>
  );
};

export default ToiletIcon;
