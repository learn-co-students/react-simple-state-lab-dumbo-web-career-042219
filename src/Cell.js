import React, { Component } from 'react';

export default class Cell extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  colorize = () => {
    const newColor = "#333"
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div onClick={this.colorize} className="cell" style={{backgroundColor: this.state.color}}>
          {this.state.color}
      </div>
    )
  }
}