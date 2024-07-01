import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;
const IMAGE_URL = 'https://via.placeholder.com/400x300';

export const Default: Story = {
  args: {
    src: IMAGE_URL,
    radius: 'circle',
    ratio: 'square',
  },
};

export const CircledImage: Story = {
  args: {
    radius: 'circle',
    ratio: 1.5,
    src: IMAGE_URL,
  },
};
export const RoundedImage: Story = {
  args: {
    radius: 20,
    ratio: 1.5,
    src: IMAGE_URL,
  },
};
export const SquaredImage: Story = {
  args: {
    radius: 0,
    ratio: 'square',
    src: IMAGE_URL,
  },
};
