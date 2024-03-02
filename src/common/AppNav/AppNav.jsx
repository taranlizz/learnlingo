import { StyledNav, StyledNavLink } from './AppNav.styled';

const AppNav = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/teachers">Teachers</StyledNavLink>
    </StyledNav>
  );
};

export default AppNav;
