import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from '../components/Image';

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    ratio: {
      control: { type: 'select', options: ['square', 16 / 9, 4 / 3] },
    },
    radius: {
      control: { type: 'select', options: ['circle', 'round', 10, 20] },
    },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const RatioSquare = Template.bind({});
RatioSquare.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  alt: 'Example',
  ratio: 'square',
  width: '100px',
};

export const RadiusCircle = Template.bind({});
RadiusCircle.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  alt: 'Example',
  ratio: 'square',
  radius: 'circle',
  width: '100px',
};

export const RadiusRound = Template.bind({});
RadiusRound.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  alt: 'Example',
  ratio: 'square',
  radius: 'round',
};
