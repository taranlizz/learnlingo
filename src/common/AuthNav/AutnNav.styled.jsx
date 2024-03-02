import styled from 'styled-components';

export const AuthNavWrapper = styled.div`
  position: absolute;
  bottom: 25px;
`;

export const AuthNavBtn = styled.button`
  display: block;
  margin-bottom: 10px;
  padding: 0;

  font-size: 25px;
  font-weight: 500;

  background-color: transparent;
  border-color: transparent;

  &:last-child {
    margin-bottom: 0px;
  }

  &:active {
    color: var(--primaryYellow);
  }
`;
