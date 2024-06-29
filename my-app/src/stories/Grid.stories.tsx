import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Grid, { GridProps } from '../components/Layout/Grid'

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    gap: {
      control: 'text',
    },
    columns: {
      control: 'object',
    },
    children: {
      control: 'object',
    },
  },
} as Meta<typeof Grid>

const Template: StoryFn<GridProps> = (args) => <Grid {...args} />

export const NumberColumns = Template.bind({})
NumberColumns.args = {
  gap: '0',
  columns: 3,
  children: Array.from({ length: 16 }, (_, index) => (
    <div key={index}>{index + 1}</div>
  )),
}

export const ResponsiveColumns = Template.bind({})
ResponsiveColumns.args = {
  gap: '0',
  columns: {
    0: 1, // 0px부터 적용
    576: 2, // 576px부터 적용
    768: 3, // 768px부터 적용
    992: 4, // 992px부터 적용
  },
  children: Array.from({ length: 16 }, (_, index) => (
    <div key={index}>{index + 1}</div>
  )),
}
