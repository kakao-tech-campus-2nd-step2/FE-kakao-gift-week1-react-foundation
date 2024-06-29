import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button, { ButtonProps } from '../components/Button'

export default {
  title: 'Common/Button',
  component: Button,
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: 'kakao',
  size: 'large',
  children: 'Default Button',
  onClick: action('clicked'),
}
