import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Grid } from './Grid';

const meta = {
    title: 'Example/Grid',
    component: Grid,
    tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        gap: 10,
        columns: 3,
        children: (
            <>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
            </>
        ),
    },
};