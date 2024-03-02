import { styled } from 'styled-components';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 25px;
  min-width: 320px;
  max-width: 320px;
  min-height: 100vh;
  background-color: var(--primaryWhite);
`;

export const MenuBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
`;
