import React from "react";

const alphabets = [7, 8, 9, 4, 5, 6, 1, 2, 3, "", 0, "C"];

const Keys = (props) => {
  const clickHandler = (e) => {
    if (e.target.value && e.target.value !== "C") {
      props.onClick(e.target.value);
    } else if (e.target.value === "C") {
      props.onDelete();
    }
  };
  return (
    <div className="key_container" onClick={clickHandler}>
      {alphabets.map((elem) => (
        <input type="button" key={elem} value={elem} />
      ))}
    </div>
  );
};

export default Keys;
