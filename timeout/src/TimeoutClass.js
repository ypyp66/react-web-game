import React, { Component } from "react";
import "./Timeout.css";

class TimeoutClass extends Component {
  state = {
    state: "waiting", //상태
    message: "클릭해서 시작", //보여질 메세지
    result: [], //시간들
  };
  timeout;
  start;
  end;

  onClickScreen = () => {
    const { state, result } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이면 클릭",
      });
      this.timeout = setTimeout(() => {
        this.start = new Date();
        console.time();
        this.setState({
          state: "now",
          message: "지금 클릭!",
        });
      }, Math.floor(Math.random() * 1000) + 2000); //2~3초 랜덤
    } else if (state === "ready") {
      this.setState({
        state: "waiting",
        message: "클릭해서 시작",
        result: [],
      });
      alert("실패");
      clearTimeout(this.timeout);
    } else if (state === "now") {
      console.timeEnd();
      this.end = new Date();
      this.setState((prevState) => {
        console.log(prevState);
        return {
          state: "waiting",
          message: "클릭해서 시작",
          result: [...prevState.result, this.end - this.start], //배열에 push
        };
      });
    }
  };
  renderAvg = () => {
    console.log(`renderAvg`);
    const { result } = this.state;
    return (
      result.length !== 0 && result.reduce((a, c) => a + c) / result.length
    );
  };
  render() {
    const { state, message, result } = this.state;
    return (
      <div>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        <div>횟수: {result.length}</div>
        <div>반응속도 : {result[result.length - 1] | 0}ms</div>
        <div>평균속도 : {this.renderAvg()}ms</div>
        {console.log(result)}
      </div>
    );
  }
}

export default TimeoutClass;
