import { HeaderStyled } from './Header.styled';
import { Logo } from '../Logo';
import { Menu } from '../Menu';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo type="ukraine" size="28" />
      <Menu />
    </HeaderStyled>
  );
};

export default Header;
