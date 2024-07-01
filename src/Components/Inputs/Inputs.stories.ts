import type { Meta, StoryObj } from '@storybook/react';
import Input from './Inputs';

const meta: Meta<typeof Input> = {
  title: 'COMMON/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['large', 'small', 'responsive'],
    },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    inputSize: 'large',
    disabled: false,
    invalid: false,
  },
};
