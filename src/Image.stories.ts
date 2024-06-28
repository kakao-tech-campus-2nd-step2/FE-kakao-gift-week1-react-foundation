import React from 'react';
import { Meta } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    ratio: {
      control: { type: 'select', options: ['16/9', 'square'] },
    },
    radius: {
      control: { type: 'select', options: ['circle'] }, // If you want to control number input, you can add 'number' option here.
    },
  },
} as Meta;

const Template: React.FC<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/400x300',
  alt: 'Sample Image',
};

export const AspectRatio169 = Template.bind({});
AspectRatio169.args = {
  src: 'https://via.placeholder.com/1600x900',
  alt: '16:9 Image',
  ratio: '16/9',
};

export const Square = Template.bind({});
Square.args = {
  src: 'https://via.placeholder.com/500',
  alt: 'Square Image',
  ratio: 'square',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://via.placeholder.com/200',
  alt: 'Rounded Image',
  radius: 'circle',
};
