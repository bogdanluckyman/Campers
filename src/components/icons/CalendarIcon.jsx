import sprite from "assets/icons/sprite.svg";

const CalendarIcon = ({ width, height }) => {
  return (
    <svg id="calendar" width={width} height={height}>
      <use href={`${sprite}#icon-calendar`}></use>
    </svg>
  );
};

export default CalendarIcon;
