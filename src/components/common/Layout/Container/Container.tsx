import { css } from "@emotion/css";
import React from "react";

interface ContainerProps {
  children: React.ReactNode | string;
  maxWidth?: string;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
}

export default function Container({
  children,
  alignItems,
  flexDirection,
  justifyContent,
  maxWidth,
}: Readonly<ContainerProps>) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: flexDirection ?? "row",
        justifyContent: justifyContent ?? "flex-start",
        alignItems: alignItems ?? "flex-start",
        maxWidth: maxWidth ?? "100%",
        margin: "0 auto",
      })}
    >
      {children}
    </div>
  );
}
