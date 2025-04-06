import React, { Component } from "react";
import './App-main.css'

class AppMain extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 ,age:''};
  }

  onPlus = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }))

  }
  onMunus = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }))

  }
  Zero = () => {
    this.setState({
      counter: 0
    })

  }
  changeInput = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  render() {
    return (
      <>
        <h4>Mening yoshim {this.state.age}</h4>
        <button onClick={this.onPlus}>+</button>
        <button onClick={this.onMunus} >-</button>
        <button onClick={this.Zero} >zero</button>

        <p>{this.state.counter}</p>
        <form>
        <span>
          yoshingiz
        </span>
        <input type="text" onChange={this.changeInput} />
        </form>
     
      </>
    );
  }
}

export default AppMain;