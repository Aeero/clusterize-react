import React, { Component } from 'react';

import Section from './section';

import './ordinaryTable.css';

class OrdinaryTable extends Component {
  render() {
    const { data = [] } = this.props;

    return (
      <div className="table">
        <table>
          <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>
                  <td>{item.d}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Section(OrdinaryTable);
