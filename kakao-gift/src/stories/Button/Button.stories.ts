import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['kakao', 'outline', 'black', 'lightGray'] },
    size: { control: 'select', options: ['small', 'medium', 'large', 'responsive'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    title: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Kakao: Story = {
  args: {
    title: 'Button',
    theme: 'kakao',
  },
}

export const Outline: Story = {
  args: {
    title: 'Outline Button',
    theme: 'outline',
  },
}

export const Black: Story = {
  args: {
    title: 'Black Button',
    theme: 'black',
  },
}

export const LightGray: Story = {
  args: {
    title: 'Light Gray Button',
    theme: 'lightGray',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    title: 'Large Button',
    theme: 'kakao',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    title: 'Small Button',
    theme: 'kakao',
  },
}

export const Responsive: Story = {
  args: {
    size: 'responsive',
    title: 'Responsive Button',
    theme: 'kakao',
  },
}

export const Disabled: Story = {
  args: {
    size: 'medium',
    title: 'Disabled Button',
    theme: 'kakao',
    disabled: true,
  },
}

export const WithTitle: Story = {
  args: {
    size: 'medium',
    title: 'Button with Title',
    theme: 'kakao',
  },
}

export const SubmitButton: Story = {
  args: {
    size: 'medium',
    title: 'Submit Button',
    theme: 'kakao',
    type: 'submit',
  },
}

export const WithOnClick: Story = {
  args: {
    size: 'medium',
    title: 'Button with onClick',
    theme: 'kakao',
    onClick: () => alert('Button clicked!'),
  },
}
