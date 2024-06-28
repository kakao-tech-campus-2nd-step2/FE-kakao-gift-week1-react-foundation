import React from 'react'
import styled from '@emotion/styled'

type GoodsItemProps = {
   imageSrc: string
   subtitle: string
   title: string
   amount: number
   rankingIndex?: number
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   width: 150px;
`

const Image = styled.img`
   width: 100px;
   height: 100px;
   border-radius: 5px;
   object-fit: cover;
`

const Subtitle = styled.div`
   color: gray;
   font-size: 14px;
`

const Title = styled.div`
   margin: 10px 0;
   font-size: 14px;
`

const Amount = styled.div`
   font-weight: bold;
`

const Badge = styled.div<{ rank: number }>`
   background-color: ${(props) => (props.rank <= 3 ? 'rgb(253, 115, 100)' : 'gray')};
   position: absolute;
   z-index: 2;
   width: 20px;
   min-width: 20px;
   height: 20px;
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 12px;
   font-weight: 700;
   top: 4px;
   left: 4px;
   color: rgb(255, 255, 255);
`

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount, rankingIndex }) => {
   return (
      <Wrapper>
         <div style={{ position: 'relative' }}>
            <Image src={imageSrc} alt={title} />
            {rankingIndex !== undefined && <Badge rank={rankingIndex}>{rankingIndex}</Badge>}
         </div>
         <Subtitle>{subtitle}</Subtitle>
         <Title>{title}</Title>
         <Amount>{amount}원</Amount>
      </Wrapper>
   )
}

export default GoodsItem
