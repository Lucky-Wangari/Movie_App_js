import React from "react";
import './style.css'
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const ImageContainer = ({ title, handleClick, imageSource }) => {

  return (
    <div onClick={handleClick} className="images">
      <img
        src={imageSource}
        alt={title} />
      <h2>{title}</h2>
    </div>
  )
}
export default ImageContainer;