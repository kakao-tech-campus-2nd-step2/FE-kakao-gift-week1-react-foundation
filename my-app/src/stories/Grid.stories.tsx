import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';

const meta: Meta = {
  title: 'Common/Grid',
  component: Grid,
};

export default meta;

const Template: StoryFn = (args) => <Grid columns={0} children={undefined} {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: 16,
  children: Array.from({ length: 16 }, (_, index) => (
    <div
      key={index}
      style={{
        padding: '10px',
        textAlign: 'center',
      }}
    >
      {index + 1}
    </div>
  )),
};
