import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import GoodsItem from './GoodsItem';

export default {
  title: 'Example/GoodsItem',
  component: GoodsItem,
} as Meta<typeof GoodsItem>;

const Template: StoryFn<typeof GoodsItem> = args => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc:
    'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  amount: '100,000원',
};

export const Item2 = Template.bind({});
Item2.args = {
  imageSrc:
    'https://st.kakaocdn.net/thumb/R750x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2Fexhibition%2F20240604150807_78e214786f89427a982f527e41d9c9f6.jpg',
  subtitle: '커다란 프렌즈 꼬옥 안고 행복 충전! 왕 크니까 왕 귀엽다!',
  title: '냥냥고양이 메가 바디 필로우_춘식이',
  amount: '99,000원',
};

export const Item3 = Template.bind({});
Item3.args = {
  imageSrc:
    'https://st.kakaocdn.net/thumb/R750x0/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2Fexhibition%2F20240603135152_018a507ff9fd4957a6b4d5a3b7b7bdfa.jpg',
  subtitle: '보기만 해도 청량한 블루 조합💙 쿨한 여름 보내보자냥😺',
  title: '춘식이 쿨링 롱바디필로우',
  amount: '48,000원',
};
