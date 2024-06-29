import styled from '@emotion/styled';

export interface ContainerProps {
  maxWidth: string;
  containerChildren?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => props.maxWidth || 'auto'};
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

const Container = ({
  maxWidth,
  containerChildren,
  flexDirection,
  justifyContent,
  alignItems,
}: ContainerProps) => (
  <StyledContainer
    maxWidth={maxWidth}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {containerChildren}
  </StyledContainer>
);

export default Container;
