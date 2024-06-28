import type { Meta, StoryObj } from '@storybook/react'
import { GoodsItem } from './GoodsItem'

const meta: Meta<typeof GoodsItem> = {
  title: 'Example/GoodsItem',
  component: GoodsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    subtitle: '카카오 프렌즈 특별 한정판',
    amount: 100000000000,
  },
}

export const Ranking1: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    subtitle: '카카오 프렌즈 특별 한정판',
    amount: 10000,
    rankingIndex: 1,
  },
}

export const Ranking4: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    subtitle: '카카오 프렌즈 특별 한정판',
    amount: 10000,
    rankingIndex: 4,
  },
}
