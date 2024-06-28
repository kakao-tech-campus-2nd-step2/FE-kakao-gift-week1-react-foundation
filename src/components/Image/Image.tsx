import React from "react";
import { css } from "@emotion/react";
import './image.css'


export default function Image(props) {
  const {src, ratio, width, radius} = props;
  return (
    <div className="Image">
      <img
        className={`${ratio} ${radius}`}
        src = {src}
        width={width}
        style={{
          borderRadius: radius,
        }}
      />
    </div>
  )
}