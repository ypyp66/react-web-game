import { useRef, useState } from "react";
import "./Keep.css";

const Keep = () => {
  const [word, setWord] = useState("아무말");
  const [answer, setAnswer] = useState("");
  const Input = useRef();
  const onChange = (e) => {
    setAnswer(e.target.value);
  };
  const onClick = () => {
    console.log(word[word.length - 1], answer[0]);
    if (word[word.length - 1] === answer[0]) {
      Input.current.style = "background-Color : lightgreen";
      setWord(answer);
      setAnswer("");
    } else {
      Input.current.style = "background-Color : lightcoral";
      setAnswer("");
    }
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };
  return (
    <div>
      <div>{word}</div>
      <span>
        단어 입력:
        <input
          value={answer}
          onKeyPress={onKeyPress}
          onChange={onChange}
          ref={Input}
        ></input>
      </span>
      <button onClick={onClick}>클릭</button>
    </div>
  );
};

export default Keep;
