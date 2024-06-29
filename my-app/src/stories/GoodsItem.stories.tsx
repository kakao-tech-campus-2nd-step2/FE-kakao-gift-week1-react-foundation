import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import GoodsItem, { GoodsItemProps } from '../components/GoodsItem'

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
  argTypes: {
    rankingIndex: {
      control: { type: 'number', min: 1, max: 10 },
    },
    imageSrc: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    amount: {
      control: 'number',
    },
  },
} as Meta<typeof GoodsItem>

const Template: StoryFn<GoodsItemProps> = (args: GoodsItemProps) => (
  <div style={{ width: args.rankingIndex ? '160px' : '120px' }}>
    <GoodsItem {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  imageSrc:
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: 3,
}

export const Ranking1 = Template.bind({})
Ranking1.args = {
  imageSrc:
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: 10000,
  rankingIndex: 1,
}

export const Ranking2 = Template.bind({})
Ranking2.args = {
  imageSrc:
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: 10000,
  rankingIndex: 2,
}

export const Ranking3 = Template.bind({})
Ranking3.args = {
  imageSrc:
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: 10000,
  rankingIndex: 3,
}

export const Ranking4 = Template.bind({})
Ranking4.args = {
  imageSrc:
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: 10000,
  rankingIndex: 4,
}
