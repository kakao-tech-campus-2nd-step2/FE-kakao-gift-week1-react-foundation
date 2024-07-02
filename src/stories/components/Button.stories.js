import React from 'react';
import Button from './Button';

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    theme: { 
      control: {
        type: 'select',
        options: ['kakao', 'facebook'],
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Btn1 = Template.bind({});
Btn1.args = {
  children: 'button',
  theme: 'kakao',
  size: 'medium'
};

export const Btn2 = Template.bind({});
Btn2.args = {
  children: 'button',
  theme: 'facebook',
  size: 'small'
};
