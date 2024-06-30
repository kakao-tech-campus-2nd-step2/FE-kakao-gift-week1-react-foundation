import React from "react";
import styled, { css } from "styled-components";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number | "square"; // ratio는 숫자 혹은 'square' 문자열을 받습니다.
  radius?: number | "circle"; // radius는 숫자 혹은 'circle' 문자열을 받습니다.
}

const StyledImage = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover; /* 이미지 비율 유지 */
  ${(props) =>
    props.ratio === "square" &&
    css`
      aspect-ratio: 1 / 1; /* 정사각형 비율 */
    `}
  ${(props) =>
    typeof props.ratio === "number" &&
    css`
      aspect-ratio: ${props.ratio}; /* 숫자 비율 */
    `}
  ${(props) =>
    typeof props.radius === "number" &&
    css`
      border-radius: ${props.radius}px; /* 숫자만큼 모서리 둥글게 */
    `}
  ${(props) =>
    props.radius === "circle" &&
    css`
      border-radius: 50%; /* 원형 모서리 */
    `}
`;

const Image: React.FC<ImageProps> = ({ ratio, radius, ...props }) => {
  return <StyledImage ratio={ratio} radius={radius} {...props} />;
};

export default Image;
