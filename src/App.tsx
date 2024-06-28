import 'reset-css';
import GoodsItem from './components/GoodsItem';
import Grid from './components/Grid';
import Container from './components/Container';
import Button from './components/Button';
import Input from './components/Input';
import Image from './components/Image';

export default function App() {
  return (
    <Container>
      <h1>Goods List</h1>
      <Grid>
        <GoodsItem
          imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
          subtitle="카카오 프렌즈 특별 한정판"
          title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
          amount={100000000000}
          rankingIndex={1}
        />
        <GoodsItem
          imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
          subtitle="카카오 프렌즈 특별 한정판"
          title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
          amount={100000000000}
          rankingIndex={2}
        />
      </Grid>
      <Grid>
        <Button
          width="responsive"
          height="100px"
          buttonColor="#e8e92e"
          hasBorder
          fontColor="black"
          fontSize="20px"
          borderColor="#e8e92e"
          borderRadius="5px"
          onClick={() => alert('Click')}
        >
          button
        </Button>
      </Grid>
      <Grid>
        <Input
          placeholder="입력"
          styleProps={{ width: '200px', height: '100px' }}
          disabled
        />
      </Grid>
      <Grid>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Kakao_logo.jpg"
          alt="예시 이미지"
          ratio={16 / 9}
          radius={10}
        />
      </Grid>
    </Container>
  );
}
