import { Meta, Story } from '@storybook/react';
import { GoodsItem, RankingGoodsItem, GoodsItemProps, RankingGoodsItemProps } from './GoodsItem';

export default {
  title: 'COMMON/GoodsItem',
  component: GoodsItem,
  argTypes: {
    imageSrc: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    amount: { control: 'text' },
    rankingIndex: { control: { type: 'number', min: 1, max: 10, step: 1 } },
  },
} as Meta;

const Template: Story<GoodsItemProps> = (args) => <GoodsItem {...args} />;
const RankingTemplate: Story<RankingGoodsItemProps> = (args) => <RankingGoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: '100000000000원',
};

export const Ranking = RankingTemplate.bind({});
Ranking.args = {
  rankingIndex: 1,
  imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: '10000원',
};
