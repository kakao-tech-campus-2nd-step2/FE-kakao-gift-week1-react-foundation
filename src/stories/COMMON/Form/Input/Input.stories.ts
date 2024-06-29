import Input from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'COMMON/Form/Input/UnderlineTextField',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
    disabled: false,
    invalid: false,
    inputSize: 'large',
  },
};
