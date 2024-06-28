import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  size: 'medium',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  size: 'medium',
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
