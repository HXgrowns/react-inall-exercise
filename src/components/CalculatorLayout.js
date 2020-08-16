import React, {Component} from 'react';
import '../styles/calculator-layout.scss';

class CalculatorLayout extends Component {
    state = {
        value1: "0",
        op: "",
        value2: "",
    }

    show = () => {
        return this.state.value1 + this.state.op + this.state.value2;
    }

    handleOp = (op) => {
        this.setState({
            op: op
        });
    }

    handleNum = (value) => {
        if (this.state.op.length > 0) {
            this.setState({
                value2: this.state.value2 * 10 + value
            });
        } else {
            this.setState({
                value1: this.state.value1 * 10 + value
            });
        }
    }

    clear = () => {
        this.setState({
            value1: "0",
            op: "",
            value2: ""
        });
    }

    equals = () => {
        if (this.state.op == "") {
            return;
        }

        let result = 0;
        if (this.state.op == "+") {
            result = this.add(this.state.value1, this.state.value2);
        } else if (this.state.op == "-") {
            result = this.minus(this.state.value1, this.state.value2);
        } else if (this.state.op == "*") {
            result = this.multiply(this.state.value1, this.state.value2);
        }

        this.setState({
            value1: result.toString(),
            op: "",
            value2: ""
        });
    }

    add = (value1, value2) => {
        return value1 + value2;
    }

    minus = (value1, value2) => {
        return value1 - value2;
    }

    multiply = (value1, value2) => {
        return value1 * value2;
    }

    render() {
    return (
    <section className="calc-layout">
        <input value = {this.show()} className="input" type="text"/>
        <button className="op" onClick = {() => this.handleOp('+')}>+</button>
        <button className="op" onClick = {() => this.handleOp('-')}>-</button>
        <button className="op" onClick = {() => this.handleOp('*')}>*</button>
        <button className="num" onClick = {() => this.handleNum(7)}>7</button>
        <button className="num" onClick = {() => this.handleNum(8)}>8</button>
        <button className="num" onClick = {() => this.handleNum(9)}>9</button>
        <button className="num" onClick = {() => this.handleNum(4)}>4</button>
        <button className="num" onClick = {() => this.handleNum(5)}>5</button>
        <button className="num" onClick = {() => this.handleNum(6)}>6</button>
        <button className="num" onClick = {() => this.handleNum(1)}>1</button>
        <button className="num" onClick = {() => this.handleNum(2)}>2</button>
        <button className="num" onClick = {() => this.handleNum(3)}>3</button>
        <button className="num" onClick = {() => this.handleNum(0)}>0</button>
        <button className="clear" onClick = {() => this.clear()}>Clear</button>
        <button className="eq" onClick = {() => this.equals()}>=</button>
    </section>);
    };
}

export default CalculatorLayout;