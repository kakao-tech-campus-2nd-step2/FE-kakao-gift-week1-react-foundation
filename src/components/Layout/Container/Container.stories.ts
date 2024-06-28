import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Container } from './Container';

const meta = {
    title: 'Example/Container',
    component: Container,
    tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Hello, world!',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
};
export const FullScreen: Story = {
    args: {
        maxWidth: '100%',
        children: 'Hello, world!',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
};