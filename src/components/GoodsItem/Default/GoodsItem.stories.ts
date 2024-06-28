import type { Meta, StoryObj } from '@storybook/react';
import { GoodsItem } from './GoodsItem';

const meta: Meta<typeof Image> = {
    title: 'Example/GoodsItem',
    component: GoodsItem,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof GoodsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
        subtitle: '카카오 프렌즈 특별 한정판',
        title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
        amount: 100000000000
    },
};