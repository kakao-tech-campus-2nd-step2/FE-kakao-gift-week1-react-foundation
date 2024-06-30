import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomButton, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: CustomButton,
} as Meta<typeof CustomButton>;

const Template: StoryFn<ButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
  children: "Secondary Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large Button",
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: "responsive",
  children: "Responsive Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled Button",
};
