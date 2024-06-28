import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};

export const Small = Template.bind({});
Small.args = {
  customSize: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  customSize: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  customSize: 'large',
};

export const Responsive = Template.bind({});
Responsive.args = {
  customSize: 'responsive',
};
