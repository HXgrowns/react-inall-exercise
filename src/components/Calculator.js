import React, {Component} from 'react';
import '../styles/calculator.scss';

class Calculator extends Component {
  render() {
    return (
      <section className="calculator">
        <h1 className="calc-title">在线计算器</h1>
        <section className="calc">
          <section className="calc-border">
            <section className="calc-layout">
              <input className="input" type="text"/>
              <button className="op">+</button><button className="op">-</button><button className="op">*</button>
              <button className="num">7</button><button className="num">8</button><button className="num">9</button>
              <button className="num">4</button><button className="num">5</button><button className="num">6</button>
              <button className="num">1</button><button className="num">2</button><button className="num">3</button>
              <button className="num">0</button><button className="clear">Clear</button><button className="eq">=</button>
            </section>
          </section>
          <a className="back-home" href="/">回到主页</a>
        </section>
      </section>);
    };
}

export default Calculator;