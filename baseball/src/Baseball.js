import { useState } from "react";

function getNumber() {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * 9));
  }
  return arr;
}
const Baseball = () => {
  const [answer, setAnswer] = useState(getNumber());
  const [value, setValue] = useState("");
  const [tries, setTries] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    console.log(answer, value);
    if (answer.join("") === value) {
      alert("홈런! 게임을 다시 시작합니다.");
      setAnswer(getNumber());
      setValue("");
      setTries([]);
    } else {
      if (tries.length >= 9) {
        alert(`10번이상 틀렸습니다! 답은 ${answer.join("")} 였습니다.`);
        setAnswer(getNumber());
        setValue("");
        setTries([]);
        return;
      }
      console.log(value[0], answer[0]);
      let strike = 0;
      let ball = 0;
      for (let i = 0; i < 4; i++) {
        console.log(
          `for${i} ${typeof parseInt(value[i])} ${typeof answer[i]} ${
            parseInt(value[i]) === answer[i]
          }`
        );
        if (parseInt(value[i]) === answer[i]) {
          strike += 1;
        } else if (answer.includes(parseInt(value[i]))) ball += 1;
      }
      console.log(`strike ${strike} ball ${ball}`);
      const newValue = tries.concat(
        `${value} : ${strike}스트라이크 ${ball}볼 `
      );
      setTries(newValue);
      setValue("");
    }
  };
  const tryList = tries.map((text, index) => <li key={index}>{text}</li>);
  return (
    <div>
      {answer}
      <div>
        <input maxLength={4} value={value} onChange={onChange}></input>
        <button onClick={onClick}>클릭</button>
      </div>
      {value}
      {tryList}
    </div>
  );
};

export default Baseball;
