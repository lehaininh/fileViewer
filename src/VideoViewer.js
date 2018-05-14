import PropTypes from "prop-types";
import React, { Component } from 'react';

class VideoViewer extends Component {
  render() {
    return (
      <div>
        <p>File name: {this.props.file.name}, file type: video</p>
        <video src={this.props.file.src} controls />
      </div>
    );
  }
}

VideoViewer.propTypes = {
	file: PropTypes.object.isRequired,
};

export default VideoViewer;
