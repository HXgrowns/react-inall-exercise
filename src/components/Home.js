import React, {Component} from 'react';
import '../styles/home.scss';
import Calculator from "./Calculator";
import HeroImage from "../images/hero-image.png";
import CalcImage from "../images/calculator.png";
import TimerImage from "../images/timer.png";

class Home extends Component {
  render(){
    return (
      <section className="home">
        <section className="band">
          <img className="hero-image" src={HeroImage}/>
          <section className="tool-title">在线实用工具</section>
        </section>
        <section className="tool-parent">
          <a className="tool" href="/calculator">
            <img className="tool-image" src={CalcImage}/>
            <p className="tool-font">计算器</p>
          </a>
          <a className="tool" href="/timer">
            <img className="tool-image" src={TimerImage}/>
            <p className="tool-font">倒计时器</p>
          </a>
        </section>
      </section>
      )};
};

export default Home;