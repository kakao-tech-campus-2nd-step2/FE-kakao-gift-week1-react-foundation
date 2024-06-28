import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Example/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    flexDirection: {
      control: { type: 'radio' },
      options: ['row', 'column'],
    },
    justifyContent: {
      control: { type: 'radio' },
      options: ['center', 'flex-start', 'flex-end'],
    },
    alignItems: {
      control: { type: 'radio' },
      options: ['center', 'flex-start', 'flex-end'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello, this is a Container!',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
