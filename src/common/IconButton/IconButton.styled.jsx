import { styled, css } from 'styled-components';

export const IconBtnStyled = styled.button`
  background-color: transparent;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
    props.type === 'close' &&
    css`
      margin-left: auto;
      margin-bottom: 20px;
    `}
`;
