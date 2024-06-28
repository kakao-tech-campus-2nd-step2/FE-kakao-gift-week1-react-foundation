import React from "react";

import Container from "./Container.tsx";

export default {
  component: Container,
  title: 'Common/Layout/Container',
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    maxWidth: { control: 'text' },
    flexDirection: {
      control: 'radio',
      options: ["none", "row", "column"]
    },
    justifyContent: {
      control: 'radio',
      options:["none", "center", "flex-start", "flex-end", "space-between", "space-around"]
    },
    alignItems: {
      control: 'radio',
      options: ["none" , "center", "flex-start", "flex-end", "baseline", "stretch"]
    }
  }
}

// 템플릿을 만들자
const Template = (args) => <Container {...args} />

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성할 것!!!
export const Default = Template.bind({});
Default.args = {
  children: 'Hello World!',
  flexDirection: 'row',
  justifyContent: '',
  alignItems: 'cemter',
}

export const FullScreen = Template.bind({});
FullScreen.args = {
  maxWidth: '100vw',
  children: 'Hello World!',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'cemter',
}