import React, { Component } from 'react';
import '../styles/timer.scss';

class Timer extends Component {
  state = {
    value: "Start",
    time: 0,
  }

  start = () => {
    let time = this.state.time;
    this.setState({
      value: time + " Seconds"
    });

    let interval = setInterval (() => {
        this.setState({
          value: --time + " Seconds"
        });
        if (time == 0) {
          clearInterval(interval);
          this.setState({
            value: "End"
          });
        }
    }, 1000);
  }

  change = (e) => {
    this.setState({
      time: e.target.value,
    });
  }

  render() {
    return (
      <section className="timer">
        <h1 className="timer-title">在线倒计时器</h1>
        <section className="timer-border">
          <aside className="timer-layout">
            <section className="timer-top">
              <span>设置时间</span>
              <input type="text" onChange={(e) => this.change(e)}/>
            </section>
            <button className="timer-bottom" onClick={() => this.start()}>Start</button>
          </aside>
          <aside className="timer-show">
            <input value={this.state.value} type="text" />
          </aside>
        </section>
        <a className="timer-back-home" href="/">回到主页</a>
      </section>);
  }
}

export default Timer;