import Container from './Container';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'COMMON/Layout/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: 'auto',
    containerChildren: 'Hello, World!',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export const FullScreen: Story = {
  args: {
    maxWidth: '100%',
    containerChildren: 'Hello, world!',
    flexDirection: undefined,
    justifyContent: undefined,
    alignItems: undefined,
  },
};
