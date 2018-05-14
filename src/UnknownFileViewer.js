import PropTypes from "prop-types";
import React, { Component } from 'react';
import axios from "axios";

class ImageViewer extends Component {
  onDownloadClick() {
    axios({
      url: this.props.file.src,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', this.props.file.name);
      document.body.appendChild(link);
      link.click();
    });
  }

  render() {
    return (
      <div>
        <p>File name: {this.props.file.name}, file type: unknown.</p>
        <img src={"./file_icon.png"} alt={this.props.file.name}/>
        <div>
          <button onClick={this.onDownloadClick.bind(this)}>Download</button>
        </div>
      </div>
    );
  }
}

ImageViewer.propTypes = {
	file: PropTypes.object.isRequired,
};

export default ImageViewer;
