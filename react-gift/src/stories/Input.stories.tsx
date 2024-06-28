import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

export default {
  title: 'Form/Input/UnderlineTextField',
  component: Input,
  argTypes: {
    inputsize: {
      control: { type: 'select', options: ['small', 'medium', 'large', 'responsive'] },
    },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputsize: 'medium',
  disabled: false,
  invalid: false,
  placeholder: 'placeholder',
};
