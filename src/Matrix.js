import React, { Component } from 'react'
import Cell from './cell'
import { pattern2 } from './data'

export default class Matrix extends Component {
  static defaultProps = {
    values: pattern2
  }
  genRow = (vals) => {
    return vals.map((val) => <Cell value={val}></Cell>)
  }

  genMatrix = () => {
    return this.props.values.map((rowVals) => (
      <div className='row'>{this.genRow(rowVals)}</div>
    ))
  }

  render() {
    return <div id='matrix'>{this.genMatrix()}</div>
  }
}
