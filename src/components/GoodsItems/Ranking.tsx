import React from 'react'

import { RankingGoodsItem } from '../../types/PropsType'
import Image from '../Image/Image'
import { Amount, Container, Subtitle, Title, RankingIndex } from './GoodsItemStyle'

const Ranking = ({
    rankingIndex,
    imageSrc,
    subtitle,
    title,
    amount
}: RankingGoodsItem) => {
    return(
        <Container>
            <RankingIndex>{rankingIndex}</RankingIndex>
            <Image
                ratio={'square'}
                radius={5}
                imageProps={{
                    src: imageSrc,
                    style: {width: '100%'}
                }}
            />
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Amount>{amount}원</Amount>
        </Container>
    )
}

export default Ranking