import React, { Component } from 'react';

import TdCell from './tdCell';

import './index.css';

/**
* @props {Number} tdHeight - 每个单元格的行高
* @props {Number} clientHeight - 表格显示容器的高度
* @props {Array} sourceData - 表格源数据
* @props {String} className - className
* @props {Array} columns - 每一列表格的渲染配置
*/

export default class extends Component {
  constructor() {
    super();

    this.state = {
      tableScrollTop: 0
    };

    this.tableScroll = this.tableScroll.bind(this);
  }

  componentDidMount() {
    this.refs.table.addEventListener('scroll', this.tableScroll);
  }
  componentWillUnmount() {
    this.refs.table.removeEventListener('scroll', this.tableScroll);
  }

  // 表格滚动事件
  tableScroll(event) {
    this.setState({
      tableScrollTop: event.target.scrollTop
    });
  }

  calcStartIndex(scrollTop, tdHeight) {
    return Math.floor(scrollTop / tdHeight);
  }
  calcEndIndex(scrollTop, tdHeight, clientHeight, rowLength) {
    let endIndex = Math.floor((scrollTop + clientHeight) / tdHeight);
    endIndex = endIndex >= rowLength ? rowLength - 1 : endIndex;
    return endIndex;
  }

  render() {
    const {
      tdHeight = 40,
      clientHeight = 300,
      sourceData = [],
      columns = [],
      className = ''
    } = this.props;

    const {
      tableScrollTop = 0
    } = this.state;

    const rowLength = sourceData.length;
    const startIndex = this.calcStartIndex(tableScrollTop, tdHeight);
    const endIndex = this.calcEndIndex(tableScrollTop, tdHeight, clientHeight, rowLength);

    return (
      <div className={['clusterize-table', className].join(' ')} style={{height: `${clientHeight}px`}} ref="table">
        <table>
          <colgroup>
          {
            columns.map((col, index) => {
              return <col width={col.width} key={index} />
            })
          }
          </colgroup>

          <tbody>
          {
            startIndex > 0 ?
            <tr style={{height: `${tdHeight * startIndex}px`}}>
              <td></td>
            </tr> :
            null
          }
          {
            (() => {
              const dataCache = [];

              for (let i = startIndex, l = endIndex; i <= l; i++) {
                const item = sourceData[i];

                dataCache.push(
                  <tr key={i + 1}>
                  {
                    columns.map((cellOption, colIndex) => {
                      return (
                        <TdCell
                          key={colIndex}
                          data={item}
                          option={cellOption}
                          rowIndex={i}
                          colIndex={colIndex}
                        />
                      )
                    })
                  }
                  </tr>
                )
              }

              return dataCache;
            })()
          }
          {
            endIndex < rowLength ?
            <tr style={{height: `${tdHeight * (rowLength - endIndex - 1)}px`}}>
            </tr> :
            null
          }
          </tbody>
        </table>
      </div>
    )
  }
}
