import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UnderlineTextField } from './UnderlineTextField';

const meta = {
    title: 'Example/Input',
    component: UnderlineTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UnderlineTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        placeholder: 'placeholder',
        size: 'responsive',
        disabled: false,
        invalid: false
    },
};