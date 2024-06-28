import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Common/Container',
  component: Container,
  argTypes: {
    padding: { control: 'text' },
    maxWidth: { control: 'text' },
    flexDirection: { control: 'radio', options: ['row', 'column'] },
    justifyContent: {
      control: 'radio',
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
      ],
    },
    alignItems: {
      control: 'radio',
      options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
    },
    children: { control: 'text' },
  },
} as Meta<typeof Container>;

type Story = StoryObj<React.ComponentProps<typeof Container>>;

export const Default: Story = {
  args: {
    padding: '16px',
    maxWidth: '1200px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    children: 'Hello World!',
  },
  render: (args) => <Container {...args} />,
};
