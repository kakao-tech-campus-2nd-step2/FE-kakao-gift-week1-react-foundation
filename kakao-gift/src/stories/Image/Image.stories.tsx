import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'

const meta: Meta<typeof Image> = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: 'text' },
    radius: { control: 'text' },
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
  },
}

export const Ratio16by9: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    ratio: '16/9',
  },
}

export const CircleImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    ratio: 'circle',
  },
}

export const SquareImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    ratio: 'square',
  },
}

export const RoundedCornersImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    radius: 20,
  },
}

export const CircleRadiusImage: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    radius: 'circle',
  },
}

export const ImageWithTitle: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'KAKAO FRIENDS',
    title: 'KAKAO FRIENDS Image',
  },
}
