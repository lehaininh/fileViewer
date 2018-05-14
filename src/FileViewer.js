import PropTypes from "prop-types";
import React, { Component } from 'react';
import ImageViewer from "./ImageViewer.js";
import AudioViewer from "./AudioViewer.js";
import VideoViewer from "./VideoViewer.js";
import UnknownFileViewer from "./UnknownFileViewer.js";

const CONFIG = require("./config.json");

let isImageFile = file_src => {
  const src_split = file_src.split(".");
  const file_extension = src_split[src_split.length - 1];
  return CONFIG.FILE_TYPE.IMAGE.indexOf(file_extension.toUpperCase()) !== -1;
};

let isAudioFile = file_src => {
  const src_split = file_src.split(".");
  const file_extension = src_split[src_split.length - 1];
  return CONFIG.FILE_TYPE.AUDIO.indexOf(file_extension.toUpperCase()) !== -1;
};

let isVideoFile = file_src => {
  const src_split = file_src.split(".");
  const file_extension = src_split[src_split.length - 1];
  return CONFIG.FILE_TYPE.VIDEO.indexOf(file_extension.toUpperCase()) !== -1;
};

class FileViewer extends Component {
  render() {
    const viewer_component = this.props.files.map((file, idx) => {
      if (isImageFile(file.src)) {
        return <div key={idx}>
          <ImageViewer
            file={file}
          />
          </div>
      } else if (isAudioFile(file.src)) {
        return <div key={idx}>
          <AudioViewer file={file} />
        </div>
      } else if (isVideoFile(file.src)) {
        return <div key={idx}>
          <VideoViewer file={file} />
        </div>
      } else {
        return <div key={idx}>
          <UnknownFileViewer file={file} />
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
