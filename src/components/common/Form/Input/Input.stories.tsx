import { Meta } from "@storybook/react/*";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large", "responsive"],
      },
    },
  },
} as Meta;

export const Small = {
  args: {
    size: "small",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

export const Large = {
  args: {
    size: "large",
  },
};

export const Responsive = {
  args: {
    size: "responsive",
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Invalid = {
  args: {
    invalid: true,
  },
};
