import React from 'react'
import Box from './box'


class Grid extends React.Component {

  render() {
    const width = this.props.columns * 14
    let rowArr = []
    for (let x = 0; x < this.props.columns; x++) {
      for (let y = 0; y < this.props.rows; y++) {
        let boxID = x + "_" + y
        rowArr.push(
          <Box
            key = {boxID}
          />
        )
      }
    }


    return (
      <div className = "grid teal" style = {{width: width}}>

        {rowArr}
        {console.log(this.props.columns)}
      </div>
    )
  }
}

export default Grid
