import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Common/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
  onLogout: () => console.log('Logged out'),
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  onLogin: () => console.log('Logged in'),
  onCreateAccount: () => console.log('Account created'),
};
