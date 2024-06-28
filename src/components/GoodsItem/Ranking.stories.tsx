import RankingItem from "./Ranking.tsx";

export default {
  component: RankingItem,
  title: 'Common/GoodsItem/Ranking',
  tags: ['autodocs'],
  argTypes: {
    rankingIndex: { control: 'number' },
    imageSrc: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    amount: { control: 'number' },
  }
}


// 템플릿을 만들자
const Template = (args) => <RankingItem {...args} />

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성할 것!!!
export const Default = Template.bind({});

Default.args = {
  rankingIndex: 1,
  imageSrc: "https://blog.kakaocdn.net/dn/bWGQ3R/btrjVWyvRUF/WvgpgftzEvXluVR1PCAiBk/img.png",
  subtitle: "내가 만든 Cookie",
  title: "뉴진스 신곡 앨범",
  amount: 10000
}