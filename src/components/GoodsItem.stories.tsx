import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import GoodsItem, { GoodsItemProps } from "../components/GoodsItem";

export default {
  title: "Components/GoodsItem",
  component: GoodsItem,
} as Meta;

const Template: StoryFn<GoodsItemProps> = (args) => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://via.placeholder.com/150",
  subtitle: "Subtitle",
  title: "Title",
  amount: 10000,
};

export const Ranking = Template.bind({});
Ranking.args = {
  ...Default.args,
  rankingIndex: 1,
};
