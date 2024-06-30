import { css } from "@emotion/css";
import React from "react";

interface GridProps {
  gap?: number;
  columns?: number;
  children: React.ReactNode;
}

export default function Grid({
  children,
  columns,
  gap = 0,
}: Readonly<GridProps>) {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: `repeat(${columns ?? 1}, 1fr)`,
        gap,
      })}
    >
      {children}
    </div>
  );
}
