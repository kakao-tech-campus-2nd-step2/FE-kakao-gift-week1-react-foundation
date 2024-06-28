import type { Meta, StoryObj } from '@storybook/react'
import GoodsItem from './GoodsItem'
import imgSrc from '../../assets/img/kakao.png'

const meta: Meta<typeof GoodsItem> = {
   title: 'COMMON/GoodsItem/Default',
   component: GoodsItem,
   tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      imageSrc: imgSrc,
      subtitle: '카카오 프렌즈 특별 한정판',
      title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
      amount: 100000000000,
   },
}
