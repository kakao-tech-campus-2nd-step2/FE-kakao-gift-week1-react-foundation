// Input.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Common/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'small', 'responsive'],
    },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} as Meta<typeof Input>;

type Story = StoryObj<InputProps>;

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large Input',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small Input',
  },
};

export const Responsive: Story = {
  args: {
    size: 'responsive',
    placeholder: 'Responsive Input',
  },
};

export const Disabled: Story = {
  args: {
    size: 'large',
    disabled: true,
    placeholder: 'Disabled Input',
  },
};

export const Invalid: Story = {
  args: {
    size: 'large',
    invalid: true,
    placeholder: 'Invalid Input',
  },
};
