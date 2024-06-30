import React from "react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: { type: "number" },
    },
    columns: {
      control: { type: "number" },
    },
    children: {
      control: { type: "text" },
    },
  },
};

function TestCase() {
  return (
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  );
}

export const ResponsiveColumn = {
  args: {
    columns: {
      initial: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    children: <TestCase />,
  },
};

export const NumberColumns = {
  args: {
    gap: 0,
    columns: 3,
    children: <TestCase />,
  },
};
