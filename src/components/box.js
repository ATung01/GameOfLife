import React from 'react'


class Box extends React.Component {

  handleClick = (event) => {
    console.log(this.props)
  }

  render() {
    return (
      <div className = "box" key = {this.props.key} onClick  = {this.handleClick}>
      </div>
    )
  }
}


export default Box
