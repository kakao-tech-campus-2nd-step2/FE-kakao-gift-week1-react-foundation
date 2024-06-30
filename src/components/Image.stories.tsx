import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Image, { ImageProps } from "../components/Image";

export default {
  title: "Components/Image",
  component: Image,
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/400x300",
  alt: "Sample Image",
};

export const Square = Template.bind({});
Square.args = {
  ...Default.args,
  ratio: "square",
};

export const CustomRatio = Template.bind({});
CustomRatio.args = {
  ...Default.args,
  ratio: 16 / 9,
};

export const Rounded = Template.bind({});
Rounded.args = {
  ...Default.args,
  radius: 8,
};

export const Circular = Template.bind({});
Circular.args = {
  ...Default.args,
  radius: "circle",
};
