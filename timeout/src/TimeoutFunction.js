import React, { useState } from "react";
import "./Timeout.css";

const TimeoutFunction = () => {
  const [state, setState] = useState({
    states: "waiting",
    message: "클릭해서 시작",
  });
  const { states, message } = state;
  const [result, setReuslt] = useState([]);

  const onClickScreen = () => {
    if (states === "waiting") {
      setState({
        states: "ready",
        message: "초록색이면 클릭",
      });
      setTimeout(() => {
        setState({
          states: "now",
          message: "지금 클릭!!!!",
          result: [],
        });
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (states === "ready") {
      alert("실패");
      setState({
        states: "waiting",
        message: "초록색이면 클릭",
      });
    } else if (states === "now") {
      setState({
        states: "waiting",
        message: "클릭해서 시작",
      });
      setReuslt({
        result: [],
      });
    }
  };

  return (
    <>
      <div id="screen" className={states} onClick={onClickScreen}>
        {message}
      </div>
    </>
  );
};

export default TimeoutFunction;
