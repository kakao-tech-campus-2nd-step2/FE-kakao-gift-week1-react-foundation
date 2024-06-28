import type { Meta, StoryObj } from '@storybook/react'
import Container from './Container'

const meta: Meta<typeof Container> = {
   title: 'Common/Layout/Container',
   component: Container,
   tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      children: 'Hello, world!',
   },
}

export const FullScreen: Story = {
   args: {
      maxWidth: '100%',
      children: 'Hello, world!',
   },
}
