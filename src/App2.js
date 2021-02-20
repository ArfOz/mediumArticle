import {mystyle} from "./style"
import './App.css';
import React from 'react';
import Box from "./Box"

class App extends React.Component {

  constructor(props){
    console.log("constructor");
    super(props);
    this.state= {counter: 0, isBoxVisible: false};
  }
  componentDidMount(){
    console.log("component did Mount")
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  shouldComponentUpdate(){
    console.log("should component update")
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log("get snapshot Before Update");
    return null;
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps");
    return null;
  }
  render(){
    console.log("render")
    return (
      <div style={mystyle}>
        {this.state.isBoxVisible && <Box />}
        <button onClick={() => this.setState({isBoxVisible: !this.state.isBoxVisible})}>Toggle</button>
        <div>Number is: {this.state.counter}</div>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increment</button>
      </div>
    );
  }
}

export default App
