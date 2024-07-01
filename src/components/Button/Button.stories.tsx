import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['kakao', 'outline', 'black', 'lightGray', 'darkGray'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['large', 'small', 'responsive'],
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Kakao = Template.bind({});
Kakao.args = {
  theme: 'kakao',
  children: 'Kakao Button',
};

export const Outline = Template.bind({});
Outline.args = {
  theme: 'outline',
  children: 'Outline Button',
};

export const Black = Template.bind({});
Black.args = {
  theme: 'black',
  children: 'Black Button',
};

export const LightGray = Template.bind({});
LightGray.args = {
  theme: 'lightGray',
  children: 'LightGray Button',
};

export const DarkGray = Template.bind({});
DarkGray.args = {
  theme: 'darkGray',
  children: 'DarkGray Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Button',
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: 'responsive',
  children: 'Responsive Button',
};
