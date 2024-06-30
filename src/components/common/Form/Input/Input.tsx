import { css } from "@emotion/css";
import React from "react";

interface InputProps {
  disabled?: boolean;
  invalid?: boolean;
  size: "small" | "medium" | "large" | "responsive";
  props?: any;
}

export default function Input({
  disabled,
  invalid,
  size,
  props,
}: Readonly<InputProps>) {
  return (
    <input
      type="text"
      disabled={disabled}
      className={css({
        padding:
          size === "small"
            ? "5px 10px"
            : size === "medium"
              ? "10px 15px"
              : size === "large"
                ? "15px 20px"
                : size === "responsive"
                  ? "1vw 1vh"
                  : "10px 15px",
        border: "1px solid",
        borderColor: invalid ? "red" : "black",
        backgroundColor: disabled ? "lightgray" : "white",
        borderRadius: 4,
      })}
      {...props}
    />
  );
}
