import { Meta, StoryObj } from "@storybook/react/*";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["primary", "warning", "danger"],
      },
    },
  },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    theme: "primary",
    text: "Primary",
  },
};

export const Warning: Story = {
  args: {
    theme: "warning",
    text: "Warning",
  },
};

export const Danger: Story = {
  args: {
    theme: "danger",
    text: "Danger",
  },
};
