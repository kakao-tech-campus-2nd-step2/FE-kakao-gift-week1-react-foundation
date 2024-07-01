import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'COMMON/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    ratio: {
      control: {
        type: 'select',
        options: ['auto', 'square', 16 / 9, 4 / 3],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['circle', 10, 20, 30],
      },
    },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: '100px',
};

export const Square = Template.bind({});
Square.args = {
  ratio: 'square',
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: '100px',
};

export const Circle = Template.bind({});
Circle.args = {
  radius: 'circle',
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: '100px',
};

export const Round = Template.bind({});
Round.args = {
  radius: 10,
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  width: '100px',
};
