import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    maxWidth: { control: 'text' },
    children: { control: 'text' },
    flexDirection: { control: 'radio', options: ['row', 'column'] },
    justifyContent: {
      control: 'radio',
      options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
    },
    alignItems: {
      control: 'radio',
      options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxWidth: '100%',
  children: 'Hello, world!',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  maxWidth: '100%',
  children: 'Hello, world!',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
