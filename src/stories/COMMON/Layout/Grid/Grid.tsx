import styled from '@emotion/styled';

export interface GridProps {
  gap: number;
  column: number;
  isResponsive?: boolean;
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  grid-gap: ${props => props.gap}px;

  ${props =>
    props.isResponsive &&
    `
    @media (min-width: 801px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 802px) and (max-width: 1177px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

const Grid = ({ gap, column, isResponsive = false }: GridProps) => (
  <StyledGrid gap={gap} column={column} isResponsive={isResponsive}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
  </StyledGrid>
);

export default Grid;
