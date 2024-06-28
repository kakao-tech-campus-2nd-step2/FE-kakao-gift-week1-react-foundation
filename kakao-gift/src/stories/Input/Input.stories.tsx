import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Enabled: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Enabled Input',
    disabled: false,
    invalid: false,
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Disabled Input',
    disabled: true,
    invalid: false,
  },
}

export const Invalid: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Invalid Input',
    disabled: false,
    invalid: true,
  },
}
