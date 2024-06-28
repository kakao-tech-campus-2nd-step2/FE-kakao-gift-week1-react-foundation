import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid, { GridProps } from '../components/Grid';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: { type: 'number' },
    },
    gap: {
      control: { type: 'number' },
    },
  },
} as Meta;

const Template: StoryFn<GridProps> = (args) => (
  <Grid {...args}>
    {[...Array(16)].map((_, index) => (
      <div key={index} style={{ padding: '8px' }}>
        {index + 1}
      </div>
    ))}
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: 10,
};
