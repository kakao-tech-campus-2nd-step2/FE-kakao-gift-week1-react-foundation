import React, { useState, ChangeEvent } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Image from './components/Image';
import GoodsItem from './components/Default';
import RankingGoodsItem from './components/Ranking';
import Grid from './components/Grid';
import Container from './components/Container';





function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInvalid(value.length > 0 && value.length < 5);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
    <Button state="normal" size="small" colorType="black" onClick={handleClick}>
      버튼
    </Button><br/>
    <Input 
      value={inputValue} 
      onChange={handleInputChange} 
      placeholder="작성하세용" 
      inputsize="medium"
      invalid={isInvalid}
      disabled={false}
    />
    <Image 
      src="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png" 
      alt="Example" 
      ratio="square"
      radius={10}
      width="100px"
    />
    <Image 
      src="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png" 
      alt="Example" 
      ratio="square"
      radius="circle"
      width="100px"
    />
    <GoodsItem
      imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
      title="[특가] 카카오 프렌즈 특별 한정판"
      subtitle="카카오 프렌즈 특별 한정판"
      amount="100000000000원"
    />
    <RankingGoodsItem
      imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
      title="[특가] 카카오 프렌즈 특별 한정판"
      subtitle="카카오 프렌즈 특별 한정판 브라이트 쿠션"
      amount="10000원"
      rankingIndex={2}
    />
     <Grid columns={3} gap={10}>
      {Array.from({ length: 16 }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </Grid>
    <Container flexDirection="row" justifyContent="space-around" alignItems="flex-start">
      <div>Hello World!</div>
    </Container>
  </div>
  );
}

export default App;
