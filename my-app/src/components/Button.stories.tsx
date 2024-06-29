import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Secondary Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large Button',
};

export const Responsive = Template.bind({});
Responsive.args = {
  size: 'responsive',
  children: 'Responsive Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};
