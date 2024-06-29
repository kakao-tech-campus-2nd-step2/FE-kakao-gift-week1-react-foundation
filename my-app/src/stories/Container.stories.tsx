import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Container, { ContainerProps } from '../components/Layout/Container'

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      control: 'text',
    },
    flexDirection: {
      control: {
        type: 'radio',
        options: ['row', 'column'],
      },
    },
    justifyContent: {
      control: {
        type: 'radio',
        options: [
          'center',
          'flex-start',
          'flex-end',
          'space-between',
          'space-around',
        ],
      },
    },
    alignItems: {
      control: {
        type: 'radio',
        options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
      },
    },
    children: {
      control: 'text',
    },
  },
} as Meta<typeof Container>

const Template: StoryFn<ContainerProps> = (args) => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
  maxWidth: '100%',
  children: 'Hello, world!',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

export const FullScreen = Template.bind({})
FullScreen.args = {
  maxWidth: '100vw',
  children: 'Hello, world!',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
