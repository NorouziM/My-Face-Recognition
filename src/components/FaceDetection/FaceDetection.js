import React from "react";
import Tilt from "react-tilt";
import "./FaceDetection.css";

const FaceDetection = ({ imageLink, box }) => {
  return (
    <div className="d-flex justify-content-center text-center mt-4">
      <Tilt options={{ max: 10 }}>
        <img id="imageBox" alt="" src={imageLink} width="auto" height="500px" />
        <div
          className="bounding-box"
          style={{
            top: box.top_row,
            right: box.right_col,
            left: box.left_col,
            bottom: box.bottom_row,
          }}
        ></div>
      </Tilt>
    </div>
  );
};

export default FaceDetection;
