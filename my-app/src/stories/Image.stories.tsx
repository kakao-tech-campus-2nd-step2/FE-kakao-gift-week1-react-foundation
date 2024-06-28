import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image from './Image';

export default {
  title: 'Common/Image',
  component: Image,
  argTypes: {
    ratio: {
      control: 'select',
      options: ['16/9', 'square'],
    },
    radius: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Image {...args} />;

// 정사각형
export const RatioSquare = Template.bind({});
RatioSquare.args = {
  ratio: 'square',
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  style: { width: '100px' },
};

// 원
export const RadiusCircle = Template.bind({});
RadiusCircle.args = {
  ratio: '16/9',
  radius: 'circle',
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  style: { width: '100px' },
};

// 라운드
export const RadiusRound = Template.bind({});
RadiusRound.args = {
  ratio: '16/9',
  radius: 10,
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  style: { width: '100px' },
};
