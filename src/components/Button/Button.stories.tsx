import React from "react";
import Button from './Button.tsx';

export default {
  component: Button,
  title: 'Common/Button',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ["responsive" , "small", "medium", "large"]
    },
    label: {
      control: 'text'
    },
    theme: {
      control: 'select',
      options:["light", "dark", "kakao"]
    },
    }
  }

// 템플릿을 만들자
const Template = (args) => <Button {...args} />

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성할 것!!!
export const Default = Template.bind({});

Default.args = {
  label: '누르면 터짐',
  size: "medium",
  theme: "kakao"
}