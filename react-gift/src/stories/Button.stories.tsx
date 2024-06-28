import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
    colorType: {
      control: {
        type: 'select',
        options: ['yellow','black', 'white', 'brown'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['normal', 'hover'],
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args}>{args.children}</Button>;

export const SmallBlack = Template.bind({});
SmallBlack.args = {
  size: 'small',
  colorType: 'yellow',
  state: 'normal',
  children: '버튼',
};