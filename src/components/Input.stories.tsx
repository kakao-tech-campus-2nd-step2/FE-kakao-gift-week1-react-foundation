import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomInput, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: CustomInput,
} as Meta<typeof CustomInput>;

const Template: StoryFn<InputProps> = (args) => <CustomInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Disabled Input",
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  placeholder: "Invalid Input",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Small Input",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Large Input",
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: "responsive",
  placeholder: "Responsive Input",
};
