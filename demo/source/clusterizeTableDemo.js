import React, { Component } from 'react';

import ClusterizeTable from '../../src/index';

import Section from './section';

class ClusterizeTableDemo extends Component {
  constructor() {
    super();

    this.columnsOption = [{
      render(item, rowIndex, colIndex) {
        return rowIndex + 1;
      }
    }, {
      dataIndex: 'a'
    }, {
      dataIndex: 'b'
    }, {
      dataIndex: 'c'
    }, {
      dataIndex: 'd'
    }]
  }
  render() {
    const { data = [] } = this.props;

    return (
      <div style={{border: '1px solid #ddd'}}>
        <ClusterizeTable
          sourceData={data}
          columns={this.columnsOption}
          tdHeight={30}
          clientHeight={500}
        />
      </div>
    )
  }
}

export default Section(ClusterizeTableDemo);
