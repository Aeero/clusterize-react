import React, { Component } from 'react';

/**
* @props {Any} data - 单元格当前列的源数据
* @props {Object} option - 单元格的渲染配置
* @props {Number} rowLength - 单元格所在的行坐标
* @props {Number} colLength - 单元格所在的列坐标
*/

export default class extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      data = {},
      option = {},
      rowIndex = 0,
      colIndex = 0
    } = this.props;

    const {
      render: cellRender,
      dataIndex,
      dataEmpty = '--'
    } = option;

    return (
      <td>
      {
        typeof cellRender === 'function' ?
          cellRender(data, rowIndex, colIndex) :
          data[option.dataIndex] ? data[option.dataIndex] : dataEmpty
      }
      </td>
    )
  }
}
