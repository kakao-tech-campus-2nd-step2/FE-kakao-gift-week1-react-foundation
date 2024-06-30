import { Meta } from "@storybook/react/*";
import Image from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    ratio: {
      control: {
        type: "select",
        options: [1, 4 / 3, 16 / 9, "square"],
      },
    },
    radius: {
      control: {
        type: "select",
        options: [0, 4, 8, 16, "circle"],
      },
    },
  },
} as Meta;

export const Ratio1 = {
  args: {
    ratio: 1,
    radius: 0,
  },
};

export const Ratio4By3 = {
  args: {
    ratio: 4 / 3,
    radius: 0,
  },
};

export const Ratio16By9 = {
  args: {
    ratio: 16 / 9,
    radius: 0,
  },
};

export const Square = {
  args: {
    ratio: "square",
    radius: 0,
  },
};

export const Circle = {
  args: {
    ratio: 1,
    radius: "circle",
  },
};

export const CircleWithRatio4By3 = {
  args: {
    ratio: 4 / 3,
    radius: "circle",
  },
};
