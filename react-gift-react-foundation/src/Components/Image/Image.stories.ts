import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'COMMON/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: { type: 'select', options: ['circle', 10, 20, 30] },
    },
    ratio: {
      control: { type: 'select', options: ['square', 'auto', 1.5, 1.78, 2] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    radius: 'circle',
    ratio: 'square',
  },
};

export const CircledImage: Story = {
  args: {
    radius: 'circle',
    ratio: 1.5,
    src: 'https://via.placeholder.com/400x300',
  },
};
export const RoundedImage: Story = {
  args: {
    radius: 20,
    ratio: 1.5,
    src: 'https://via.placeholder.com/400x300',
  },
};
export const SquaredImage: Story = {
  args: {
    radius: 0,
    ratio: 'square',
    src: 'https://via.placeholder.com/400x300',
  },
};
