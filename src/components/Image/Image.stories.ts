import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
    title: 'Example/Image',
    component: Image,
    tags: ['autodocs'],
    argTypes: {
        radius: {
            control: { type: 'text' },
            table: {
                type: { summary: 'number | "circle"' },
            },
        },
        ratio: {
            control: { type: 'text' },
            table: {
                type: { summary: '"16:9" | "square"' },
            },
        },
        width: {
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
    },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioSquare: Story = {
    args: {
        src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
        ratio: 'square',
    },
};
export const RadiusCircle: Story = {
    args: {
        src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
        radius: 'circle',
    },
};
export const RadiusRound: Story = {
    args: {
        src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
        radius: 10,
    },
};
