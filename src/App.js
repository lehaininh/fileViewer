import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import FileViewer from "./FileViewer.js";

const VALID_SAMPLE = `{
	"files": [{
    "name": "image.jpg",
		"src": "https://i-vnexpress.vnecdn.net/2018/05/13/hiep-si-bi-dam-5076-1526225880.jpg",
		"size": "129203"
	}, {
		"name": "audio.mp3",
		"src": "http://tegos.kz/new/mp3_full/Imany_-_Wrong_Kind_of_War.mp3",
		"size": "129203"
	}, {
		"name": "video.mp4",
		"src": "http://techslides.com/demos/sample-videos/small.mp4",
		"size": "129203"
	}]
}`;

class App extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.handleAttachmentList = this.handleAttachmentList.bind(this);
    this.state = {
      "json_text": VALID_SAMPLE,
      "error_message": null,
      "files": []
    }
  }

  handleAttachmentList(attachment_list) {
    this.setState({
      "files": attachment_list.files
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.json_text) {
      try {
        const attachment_list = JSON.parse(this.state.json_text);
        this.handleAttachmentList(attachment_list);
      } catch (ex) {
        this.setState({
          "error_message": "Not a valid JSON object"
        });
      }
    } else {
      this.setState({
        "error_message": "Not a valid JSON object"
      });
    }
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
          <h1 className="App-title">FileViewer by lehaininh</h1>
        </header>
        {
          this.state.error_message &&
            <p style={{"color": "red"}}>{this.state.error_message}</p>
        }
        <p>Paste your valid JSON object below</p>
        <p className="App-intro">
          <textarea style={{"height": "500px", "width": "500px"}}
            onChange={this.onTextChange}
            value={VALID_SAMPLE}
          >
          </textarea>
        </p>
        <button onClick={this.onSubmit}>Submit</button>
        <FileViewer
          files={this.state.files}
        />
      </div>
    );
  }
}

export default App;
