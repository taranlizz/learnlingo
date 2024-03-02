import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  position: absolute;
  top: 40%;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0px;
  }

  &.active {
    color: var(--primaryYellow);
  }
`;
