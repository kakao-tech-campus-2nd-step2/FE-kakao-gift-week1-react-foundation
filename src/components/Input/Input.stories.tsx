import React from "react";

import Input from "./Input.tsx";

export default {
  component: Input,
  title: 'Common/Input',
  tags: ['autodocs'],
  argTypes: {
    isInvalid: { control: 'boolean' },
    isDisabled: { 
      control: 'boolean',
      options: ["primary", "disabled"],
    },
    size: { 
      control: 'select',
      options: ["small", "medium", "large"],
    }
  }
}

// 템플릿을 만들자
const Template = (args) => <Input {...args} />

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성할 것!!!
export const PrimaryTextfield = Template.bind({});

PrimaryTextfield.args = {
  placeholder: '입력입력',
  isInvalid: false,
  isDisabled: false,
}

export const inValidTextfield = Template.bind({});

inValidTextfield.args = {
  placeholder: 'InValid',
  isInvalid: true,
  isDisabled: false,
}

export const disabledTextfield = Template.bind({});

disabledTextfield.args = {
  placeholder: 'Disabled!',
  isDisabled: true,
}