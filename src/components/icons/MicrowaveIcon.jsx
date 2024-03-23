import sprite from "assets/icons/sprite.svg";

const MicrowaveIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-microwave`}></use>
    </svg>
  );
};

export default MicrowaveIcon;
