import React, { Component } from 'react';

import OrdinaryTable from './ordinaryTable';
import ClusterizeTableDemo from './clusterizeTableDemo';

import './APP.css';

export default class extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="container">
        <header>
          <h4>性能对比</h4>

        </header>
        <div className="content">
          <OrdinaryTable title="普通表格" />
          <ClusterizeTableDemo title="优化后的表格" />
        </div>
      </div>
    )
  }
}
