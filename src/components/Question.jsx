import React, { useState, useEffect } from "react";
import Keys from "./Keys/Keys";
const generateNumbers = () => {
  const first = Math.floor(Math.random() * 6 + 13);
  const second = Math.floor(Math.random() * 7 + 3);
  return [first, second];
};

const Question = () => {
  const [question, setQuestion] = useState(generateNumbers());
  const [enteredValue, setEnteredValue] = useState("");
  const submitHandler = (answer) => {
    console.log(`The answer I got is ${answer}`);
    if (parseInt(answer) === question[0] * question[1]) {
      console.log("Great Correct Answer");
      setQuestion(generateNumbers());
      setEnteredValue("");
    } else {
      console.log("Wrong Answer!! Right answer is ", question[0] * question[1]);
    }
  };

  const changeHandeler = (e) => {
    setEnteredValue(e.target.value);
  };
  const pressHandler = (pressedKey) => {
    // console.log(pressedKey);
    setEnteredValue((pVal) => pVal + pressedKey);
  };
  const deleteLetter = () => {
    if (enteredValue.length > 0) {
      setEnteredValue((pVal) => {
        return pVal.slice(0, pVal.length - 1);
      });
    }
  };
  return (
    <div className="main_container">
      {/* <div className="question_box">13 &#xd7; 7</div> */}
      <div className="question_box">
        <div className="question">
          {question[0]} &#xd7; {question[1]}
        </div>
        <div className="input">
          <input type="number" value={enteredValue} onChange={changeHandeler} />
          <button onClick={() => submitHandler(enteredValue)}>Check</button>
        </div>
        <Keys onClick={pressHandler} onDelete={deleteLetter} />
      </div>
    </div>
  );
};

export default Question;
