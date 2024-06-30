import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';

const meta: Meta = {
  title: 'Common/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn = (args) => <Grid columns={0} children={undefined} {...args} />;

export const NumberColumns = Template.bind({});
NumberColumns.args = {
  columns: 3,
  gap: 0,
  children: Array.from({ length: 16 }, (_, index) => (
    <div
      key={index}
      style={{
        padding: '10px',
        textAlign: 'left',
      }}
    >
      {index + 1}
    </div>
  )),
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  columns: 0,
  gap: 0,
  children: Array.from({ length: 16 }, (_, index) => (
    <div
      key={index}
      style={{
        padding: '10px',
        textAlign: 'left',
      }}
    >
      {index + 1}
    </div>
  )),
};