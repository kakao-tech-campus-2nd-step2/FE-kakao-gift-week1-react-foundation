import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  // 적절한 기본 props를 여기다 설정
}
