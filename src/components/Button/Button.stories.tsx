import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
    title: 'Common/Button',
    component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        theme: 'basic',
        size: 'responsive'
    },
};

export const Kakao: Story = {
    args: {
        theme: 'kakao',
        size: 200
    }
}