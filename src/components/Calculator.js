import React, {Component} from 'react';
import CalculatorLayout from "../components/CalculatorLayout";
import '../styles/calculator.scss';

class Calculator extends Component {
  render() {
    return (
      <section className="calculator">
        <h1 className="calc-title">在线计算器</h1>
        <section className="calc">
          <section className="calc-border">
            <CalculatorLayout/>
          </section>
          <a className="back-home" href="/">回到主页</a>
        </section>
      </section>);
    };
}

export default Calculator;