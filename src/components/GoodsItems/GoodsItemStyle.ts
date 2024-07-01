import styled from '@emotion/styled'

export const RankingIndex = styled.div<{children: number}>`
    background-color: ${props => props.children>3 ? 'gray' : 'hotpink'};
    border-radius: 5px;

    position: absolute; 
    width: 30px;
    height: 30px; 
    top: 5px;
    left: 5px;
    
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #f8f8f8;
`

export const Subtitle = styled.p`
    font-size: 15px;
    width: 100%;
    color: grey;
    overflow: hidden;
    padding: 0;
    margin: 1px;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const Title = styled.p`
    font-size: 16px;
    width: 100% 
    padding: 0;
    margin: 1px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
        
    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인수
    -webkit-box-orient: vertical
`
export const Amount = styled.div`
    font-size: 18px;
    font-weight: 700;
`

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 150px;
`