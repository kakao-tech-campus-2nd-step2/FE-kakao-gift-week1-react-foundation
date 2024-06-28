import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Common/Image',
  component: Image,
  argTypes: {
    ratio: {
      control: 'select',
      options: ['square', 'auto', 16 / 9, 4 / 3], // 사용자가 값을 지정할 수 있습니다.
    },
    radius: {
      control: 'select',
      options: ['circle', 0, 10, 20, 30],
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} as Meta<typeof Image>;

type Story = StoryObj<ImageProps>;

export const Square: Story = {
  args: {
    ratio: 'square',
    radius: 0,
    src: 'https://via.placeholder.com/300',
    alt: 'Square Image',
  },
};

export const Circle: Story = {
  args: {
    ratio: 'square',
    radius: 'circle',
    src: 'https://via.placeholder.com/300',
    alt: 'Circle Image',
  },
};

export const SixteenByNine: Story = {
  args: {
    ratio: 16 / 9,
    radius: 0,
    src: 'https://via.placeholder.com/300',
    alt: '16:9 Image',
  },
};

export const RoundedCorners: Story = {
  args: {
    ratio: 4 / 3,
    radius: 20,
    src: 'https://via.placeholder.com/300',
    alt: 'Rounded Corners Image',
  },
};

export const Auto: Story = {
  args: {
    ratio: 'auto',
    radius: 0,
    src: 'https://via.placeholder.com/300',
    alt: 'Auto Image',
  },
};
