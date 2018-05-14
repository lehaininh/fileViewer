import PropTypes from "prop-types";
import React, { Component } from 'react';

class AudioViewer extends Component {
  render() {
    return (
      <div>
        <p>File name: {this.props.file.name}, file type: audio</p>
        <audio src={this.props.file.src} controls />
      </div>
    );
  }
}

AudioViewer.propTypes = {
	file: PropTypes.object.isRequired,
};

export default AudioViewer;
