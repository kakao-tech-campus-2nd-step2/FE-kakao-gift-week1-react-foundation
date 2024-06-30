import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import UnderlineTextField from './Input';

const meta: Meta<typeof UnderlineTextField> = {
  title: 'Common/Form/Input/UnderlineTextField',
  component: UnderlineTextField,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
    },
  },
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    invalid: false,
    placeholder: '내용을 입력하세요',
  },
};
