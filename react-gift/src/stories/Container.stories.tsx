import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from '../components/Container';

export default {
  title: 'Container',
  component: Container,
  argTypes: {
    flexDirection: {
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    justifyContent: {
      control: {
        type: 'select',
        options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
      },
    },
    alignItems: {
      control: {
        type: 'select',
        options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
      },
    },
  },
} as Meta;

const Template: StoryFn<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  children: 'Hello, world!',
};
