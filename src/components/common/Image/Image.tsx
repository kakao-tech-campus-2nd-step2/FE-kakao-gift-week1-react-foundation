import React from "react";
import { css } from "@emotion/css";
import ASSETS from "constants/assets";

interface ImageProps {
  src?: string;
  ratio: number | "square";
  radius: number | "circle";
  props?: any;
}

export default function Image({
  radius,
  ratio,
  src,
  props,
}: Readonly<ImageProps>) {
  const imageSrc = src || ASSETS.DEFAULT_IMAGE_SRC;
  const aspectRatio =
    ratio === "square" ? 1 : typeof ratio === "number" ? ratio : 1;

  return (
    <div
      className={css({
        position: "relative",
        paddingTop: `${(1 / aspectRatio) * 100}%`,
        borderRadius:
          radius === "circle"
            ? "50%"
            : typeof radius === "number"
              ? `${radius}px`
              : undefined,
        overflow: "hidden",
      })}
    >
      <img
        src={imageSrc}
        alt="sample"
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        })}
        {...props}
      />
    </div>
  );
}
