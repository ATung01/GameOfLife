import React from 'react'
import Box from './box'


class Grid extends React.Component {




  render() {
    let rowArr = []
    for (let x = 0; x < this.props.columns; x++) {
      for (let y = 0; y < this.props.rows; y++) {
        rowArr.push(
          <Box
            key ={x + "_" + y}
          />
        )
      }
    }


    return (
      <div className = "grid teal">

        {rowArr}
        {console.log(this.props.columns)}
      </div>
    )
  }
}

export default Grid
