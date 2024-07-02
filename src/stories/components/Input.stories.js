import React from 'react';
import Input from './Input';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
      placeholder: { control: 'text'},
      disabled: { control: 'boolean' },
      invalid: { control: 'boolean' },
      size: {
        control: { type: 'radio' },
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
  };

  const Template = (args) => <Input {...args} />;

  export const TextField = Template.bind({});
  TextField.args = {
    placeholder: 'placeholder',
    disabled: false,
    invalid: false,
    size: 'small',
  };