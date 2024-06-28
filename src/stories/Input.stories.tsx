import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '@components/Input/Input';

const meta: Meta<InputProps> = {
  title: 'common/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
  },
};

export default meta;

const Template: StoryFn<InputProps> = function Tempalte(args: InputProps) {
  return <Input {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  invalid: false,
  size: 'medium',
};
