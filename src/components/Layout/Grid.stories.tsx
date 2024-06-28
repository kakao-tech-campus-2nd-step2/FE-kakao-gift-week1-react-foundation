import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Grid from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    gap: { control: 'number' },
    columns: {
      control: 'object',
    },
    children: { control: 'object' },
  },
} as Meta<typeof Grid>;

type Story = StoryObj<React.ComponentProps<typeof Grid>>;

const Template: Story = (args) => (
  <Grid {...args}>
    {[...Array(16).keys()].map((num) => (
      <div key={num + 1}>{num + 1}</div>
    ))}
  </Grid>
);

export const Default: Story = Template.bind({});
Default.args = {
  gap: 16,
  columns: 4,
};

export const Responsive: Story = Template.bind({});
Responsive.args = {
  gap: 16,
  columns: {
    initial: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
};
