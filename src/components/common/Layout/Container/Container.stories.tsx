import { Meta } from "@storybook/react/*";
import Container from "./Container";

export default {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    flexDirection: {
      control: { type: "select", options: ["row", "column"] },
    },
    justifyContent: {
      control: {
        type: "select",
        options: [
          "flex-start",
          "center",
          "flex-end",
          "space-between",
          "space-around",
        ],
      },
      alignItems: {
        control: {
          type: "select",
          options: ["flex-start", "center", "flex-end", "baseline", "stretch"],
        },
      },
    },
  },
} as Meta;

export const Default = {
  args: {
    children: "Hello, World!",
  },
};

export const FullScreen = {
  args: {
    children: "Hello, World!",
    maxWidth: "100%",
  },
};
