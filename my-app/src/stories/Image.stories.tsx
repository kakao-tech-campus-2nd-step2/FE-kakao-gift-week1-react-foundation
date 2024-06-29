import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Image, { ImageProps } from '../components/Image'

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    ratio: {
      control: {
        type: 'select',
        options: [1, 'square'],
      },
    },
    radius: {
      control: {
        type: 'number', // 'select' 대신 'number'를 사용합니다
      },
    },
    width: {
      control: 'text',
    },
  },
} as Meta<typeof Image>

const Template: StoryFn<ImageProps> = (args: ImageProps) => <Image {...args} />

export const RatioSquare = Template.bind({})
RatioSquare.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  alt: 'Ratio Square Image',
  ratio: 'square',
  radius: 0,
  width: '400px',
}

export const RadiusCircle = Template.bind({})
RadiusCircle.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  alt: 'Radius Circle Image',
  ratio: 'square',
  radius: 100,
  width: '100px',
}

export const RadiusRound = Template.bind({})
RadiusRound.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  alt: 'Radius Round Image',
  radius: 10,
  width: '1000px',
}
