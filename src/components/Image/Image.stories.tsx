import type { Meta, StoryObj } from '@storybook/react'

import Image from './Image'
import imageSource from '../../../public/testimage.jpg'

const meta = {
    title: 'Common/Image',
    component: Image,
    args: {
        imageProps: {
            src: imageSource,
            alt: 'test image'
        }
    }
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        radius: 30
    }
}
export const Circle: Story = {
    args: {
        ratio: 1/2,
        radius: 'circle'
    }
}
export const Square: Story = {
    args: {
        ratio: 'square',
        radius: 0
    }
}