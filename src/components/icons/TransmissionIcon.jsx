import sprite from "assets/icons/sprite.svg";

const TransmissionIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-transmission`}></use>
    </svg>
  );
};

export default TransmissionIcon;
