import type { Meta, StoryObj } from '@storybook/react'
import imgSrc from '../../assets/img/kakao.png'
import Image from './Image'

const meta: Meta<typeof Image> = {
   title: 'Common/Image',
   component: Image,
   tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: { ratio: 16 / 9, radius: 30, src: imgSrc },
}
