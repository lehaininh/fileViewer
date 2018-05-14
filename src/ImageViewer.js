import PropTypes from "prop-types";
import React, { Component } from 'react';

class ImageViewer extends Component {
  render() {
    return (
      <div>
        <img src={this.props.file.src} />
      </div>
    );
  }
}

ImageViewer.propTypes = {
	file: PropTypes.object.isRequired,
};

export default ImageViewer;
