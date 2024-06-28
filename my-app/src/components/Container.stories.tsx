import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Example/Container',
  component: Container,
  argTypes: {
    maxWidth: { control: 'text' },
    flexDirection: {
      control: {
        type: 'radio',
        options: ['row', 'column'],
      },
    },
    justifyContent: {
      control: {
        type: 'radio',
        options: [
          'center',
          'flex-start',
          'flex-end',
          'space-between',
          'space-around',
        ],
      },
    },
    alignItems: {
      control: {
        type: 'radio',
        options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
      },
    },
  },
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = args => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxWidth: '1200px',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  children: 'Hello, world!',
};
