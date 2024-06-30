import { Meta } from "@storybook/react/*";
import DefaultComponent from "./Default";
import ASSETS from "constants/assets";

export default {
  title: "Components/Default",
  component: DefaultComponent,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    subtitle: {
      control: { type: "text" },
    },
    amount: {
      control: { type: "number" },
    },
  },
} as Meta;

export const Default = {
  args: {
    title: "카카오 프렌즈 특별 한정판",
    imageSrc: ASSETS.DEFAULT_IMAGE_SRC,
    subtitle: "[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션",
    amount: 10000,
  },
};
