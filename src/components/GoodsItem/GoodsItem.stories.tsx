import GoodsItem from "./GoodsItem.tsx";

export default {
  component: GoodsItem,
  title: 'Common/GoodsItem/Default',
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    amount: { control: 'text' },
  }
}

// 템플릿을 만들자
const Template = (args) => <GoodsItem {...args} />

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성할 것!!!
export const Default = Template.bind({});

Default.args = {
  imageSrc: "https://blog.kakaocdn.net/dn/bWGQ3R/btrjVWyvRUF/WvgpgftzEvXluVR1PCAiBk/img.png",
  subtitle: "내가 만든 Cookie",
  title: "뉴진스 신곡 앨범",
  amount: "10,000"
}