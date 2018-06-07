import React, { Component } from 'react';

import './section.css';

export default function(ChildrenComponent) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        rows: 1000
      };

      this.selectChange = this.selectChange.bind(this);
    }

    createDemoData(rows) {
      var demoData = [];

      function randomNum() {
        return (Math.random() * 10000).toFixed(4);
      }

      for (let i = 0, l = rows; i < l; i++) {
        demoData[i] = {
          a: randomNum(),
          b: randomNum(),
          c: randomNum(),
          d: randomNum()
        }
      }

      return demoData;
    }

    selectChange(event) {
      const value = Number(event.target.value);

      this.setState({
        rows: value,
        demoData: this.createDemoData(value)
      });
    }

    render() {
      const { title } = this.props;
      const { rows } = this.state;

      const demoData = this.createDemoData(rows);

      return (
        <section>
          <h6>{title}</h6>

          <label>选择行数</label>

          <select onChange={this.selectChange}>
            <option value="1000">1000</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="50000">50000</option>
            <option value="100000">100000</option>
          </select>

          <ChildrenComponent data={demoData} />
        </section>
      )
    }
  }
}
