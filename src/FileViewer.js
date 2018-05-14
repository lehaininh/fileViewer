import PropTypes from "prop-types";
import React, { Component } from 'react';
import ImageViewer from "./ImageViewer.js";

const CONFIG = require("./config.json");

let isImageFile = file_src => {
  const src_split = file_src.split(".");
  const file_extension = src_split[src_split.length - 1];
  return CONFIG.FILE_TYPE.IMAGE.indexOf(file_extension.toUpperCase()) != -1;
};

class FileViewer extends Component {
  render() {
    console.info("REMOVEME - props: ", this.props.files);
    const viewer_component = this.props.files.map((file, idx) => {
      if (isImageFile(file.src)) {
        return <div key={idx}>
          <ImageViewer
            file={file}
          />
          </div>
      }
    });
    return (
      <div>
        {viewer_component}
      </div>
    );
  }
}

FileViewer.propTypes = {
	files: PropTypes.array.isRequired,
};

export default FileViewer;
