import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    gap: { control: 'text' },
    columns: {
      control: 'object',
      defaultValue: { initial: 1, sm: 2, md: 3, lg: 4 },
    },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn = (args) => <Grid {...args} />;

export const NumberColumns = Template.bind({});
NumberColumns.args = {
  columns: 3,
  gap: '10px',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </>
  ),
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  columns: { initial: 1, sm: 2, md: 3, lg: 4 },
  gap: '10px',
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
    </>
  ),
};
