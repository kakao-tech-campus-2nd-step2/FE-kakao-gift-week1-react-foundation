import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import GoodsItem, { GoodsItemProps } from './GoodsItem';

export default {
  title: 'Common/GoodsItem',
  component: GoodsItem,
  argTypes: {
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
      control: 'text',
    },
    rankingIndex: {
      control: { type: 'number', min: 1 },
    },
  },
} as Meta<typeof GoodsItem>;

type Story = StoryObj<GoodsItemProps>;

export const Default: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/200',
    subtitle: '카카오 프렌즈 특가',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: '10000원',
  },
};

export const Ranking: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/200',
    subtitle: '카카오 프렌즈 특가',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: '10000원',
    rankingIndex: 1,
  },
};
