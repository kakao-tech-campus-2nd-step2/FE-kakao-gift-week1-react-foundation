import React from "react";

import Image from "./Image.tsx";

export default {
  component: Image,
  title: 'Common/Image',
  tags: ['autodocs'],
  argTypes: {
    src: {control: 'text'
    },
    width: {
      control: 'text'
    },
    // number은 아직 구현중
    ratio: {
      control: 'text',
      options: ["number", "auto", "square"]
    },
    radius: {
      control: 'text'
    }
  }
}

// 템플릿을 만들자
const Template = (args) => <Image {...args} />

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성할 것!!!
export const RatioSquare = Template.bind({});
RatioSquare.args = {
  src: 'https://images.khan.co.kr/article/2023/05/09/news-p.v1.20230509.81d6231f8f364496a03089815eef0340.jpg',
  width: '300px',
  ratio: 'square',
  radius: '',
}

export const RadiusCircle = Template.bind({});
RadiusCircle.args = {
  src: 'https://images.khan.co.kr/article/2023/05/09/news-p.v1.20230509.81d6231f8f364496a03089815eef0340.jpg',
  width: '300px',
  ratio: 'square',
  radius: 'circle',
}

export const RadiusRound = Template.bind({});
RadiusRound.args = {
  src: 'https://images.khan.co.kr/article/2023/05/09/news-p.v1.20230509.81d6231f8f364496a03089815eef0340.jpg',
  width: '300px',
  ratio: 'auto',
  radius: '10px',
}