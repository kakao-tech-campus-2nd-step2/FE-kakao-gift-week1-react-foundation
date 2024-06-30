import React from "react";
import { css } from "@emotion/css";

export type ButtonProps = {
  theme: "primary" | "warning" | "danger";
  text: string;
  props?: any;
};

export default function Button({ theme, text, props }: Readonly<ButtonProps>) {
  return (
    <button
      className={css({
        padding:
          theme === "primary"
            ? "10px 20px"
            : theme === "warning"
              ? "15px 25px"
              : "25px 35px",
        border: "none",
        borderRadius: 4,
        color: "white",
        backgroundColor:
          theme === "primary" ? "blue" : theme === "warning" ? "orange" : "red",
      })}
      {...props}
    >
      {text}
    </button>
  );
}
