import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Common/Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Container {...args}>Hello World</Container>;

export const Default = Template.bind({});
Default.args = {
  maxWidth: '1200px',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  maxWidth: '1200px',
};