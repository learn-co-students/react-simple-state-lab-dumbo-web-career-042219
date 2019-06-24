import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
}
    // ...define initial state with a key of 'color' set to the 'value' prop
  }

colorChange = () => {
  console.log("hola", this.state.color); //
  const newColor = '#333'
  this.setState({
    color: newColor
  })
}

  render(){
    console.log(this.state); //
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.colorChange}>Hey</div>

    )


  }

}
