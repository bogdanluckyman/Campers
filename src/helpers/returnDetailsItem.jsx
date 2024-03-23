const returnDetailsItem = (key, innerText, icon) => {
  return (
    key !== 0 && (
      <li>
        {icon}
        {`${innerText}${key > 1 ? "s" : ""}`}
      </li>
    )
  );
};

export default returnDetailsItem;
