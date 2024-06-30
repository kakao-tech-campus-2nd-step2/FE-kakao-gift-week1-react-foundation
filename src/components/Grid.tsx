import styled from "styled-components";

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
`;
