import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Grid } from './Grid'

const meta: Meta<typeof Grid> = {
  title: 'Example/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const numbers = Array.from({ length: 16 }, (_, i) => i + 1)

export const Default: Story = {
  args: {
    gap: 4,
    columns: 4,
    children: numbers.map((num) => (
      <div key={num} className="grid-item">
        {num}
      </div>
    )),
  },
}
