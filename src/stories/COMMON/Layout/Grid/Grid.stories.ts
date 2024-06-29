import Grid from './Grid';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'COMMON/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberColumns: Story = {
  args: {
    gap: 0,
    column: 3,
  },
};

export const ResponsiveColumns: Story = {
  args: {
    gap: 0,
    column: 3,
    isResponsive: true,
  },
};
