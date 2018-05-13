import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onSubmit() {
  }

  onTextChange(e) {
    this.setState({
      "json_text": e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <textarea style={{"height": "500px", "width": "500px"}}
            onChange={this.onTextChange}
          >
            Insert JSON object
          </textarea>
        </p>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
