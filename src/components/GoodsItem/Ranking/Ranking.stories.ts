import type { Meta, StoryObj } from '@storybook/react';
import { Ranking } from './Ranking';

const meta: Meta<typeof Image> = {
    title: 'Example/Ranking',
    component: Ranking,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Ranking>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rankingIndex: 1,
        imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
        subtitle: '카카오 프렌즈 특별 한정판',
        title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
        amount: 10000
    },
};