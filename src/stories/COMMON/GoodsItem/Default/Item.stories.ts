import Item from './Item';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'COMMON/GoodsItem/Default',
  component: Item,
  tags: ['autodocs'],
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
};
