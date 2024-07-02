import React from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
 
};

const Template = (args) => <Image {...args} />;

export const SquareImg = Template.bind({});
SquareImg.args = {
  ratio: 16 / 9,
  radius: 20,
  width: 500,
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
}; 
