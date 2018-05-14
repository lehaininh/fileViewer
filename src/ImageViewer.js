import PropTypes from "prop-types";
import React, { Component } from 'react';

class ImageViewer extends Component {
  render() {
    return (
      <div>
        <p>File name: {this.props.file.name}, file type: image</p>
        <img src={this.props.file.src} alt={this.props.file.name}/>
        <div>
          <button>Download</button>
        </div>
      </div>
    );
  }
}

ImageViewer.propTypes = {
	file: PropTypes.object.isRequired,
};

export default ImageViewer;
