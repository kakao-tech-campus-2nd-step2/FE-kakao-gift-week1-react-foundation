import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
    title: 'Common/Input',
    component: Input,
    args: {
        inputProps: {placeholder: "placeholder"}
    }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        invalid: false,
        sizeI: 'responsive'
    },
}
export const SizeChange: Story = {
    args: {
        disabled: false,
        invalid: false,
        sizeI: 50
    },
}
export const Disabled: Story = {
    args: {
        disabled: true,
        invalid: false,
        sizeI: 'responsive'
    }
}
export const Invalid: Story = {
    args: {
        disabled: false,
        invalid: true,
        sizeI: 'responsive'
    }
}