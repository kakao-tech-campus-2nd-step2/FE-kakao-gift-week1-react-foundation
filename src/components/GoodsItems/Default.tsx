import React from 'react'

import { DefaultGoodsItem } from '../../types/PropsType'
import Image from '../Image/Image'
import { Amount, Container, Subtitle, Title } from './GoodsItemStyle'

const Default = ({
    imageSrc,
    subtitle,
    title,
    amount
}: DefaultGoodsItem) => {
    return(
        <Container>
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

export default Default