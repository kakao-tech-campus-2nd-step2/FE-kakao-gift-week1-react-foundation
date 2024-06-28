import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    theme: {
      control: 'select',
      options: ['kakao', 'outline', 'black', 'lightGray', 'darkGray'],
    },
    size: {
      control: 'select',
      options: ['large', 'small', 'responsive'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<ButtonProps>;

export const Kakao: Story = {
  args: {
    theme: 'kakao',
    size: 'large',
    children: 'Button',
    onClick: () => alert('Button Clicked'),
  },
};

export const Outline: Story = {
  args: {
    theme: 'outline',
    size: 'small',
    children: 'Outline Button',
    onClick: () => alert('Outline Button Clicked'),
  },
};

export const Black: Story = {
  args: {
    theme: 'black',
    size: 'responsive',
    children: 'Black Button',
    onClick: () => alert('Black Button Clicked'),
  },
};

export const Disabled: Story = {
  args: {
    theme: 'lightGray',
    size: 'large',
    disabled: true,
    children: 'Disabled Button',
  },
};
