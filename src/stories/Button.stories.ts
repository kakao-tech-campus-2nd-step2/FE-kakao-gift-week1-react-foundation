import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    theme: {
      control: {
        type: 'select',
        options: ['kakao', 'outline', 'black', 'lightGray', 'darkGray'],
      },
    },
  },
  // Use `action` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: action('button-click') },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Responsive: Story = {
  args: {
    size: 'responsive',
    label: 'Responsive Button',
  },
};

export const Kakao: Story = {
  args: {
    theme: 'kakao',
    label: 'Kakao Button',
  },
};

export const Outline: Story = {
  args: {
    theme: 'outline',
    label: 'Outline Button',
  },
};

export const Black: Story = {
  args: {
    theme: 'black',
    label: 'Black Button',
  },
};

export const LightGray: Story = {
  args: {
    theme: 'lightGray',
    label: 'Light Gray Button',
  },
};

export const DarkGray: Story = {
  args: {
    theme: 'darkGray',
    label: 'Dark Gray Button',
  },
};
