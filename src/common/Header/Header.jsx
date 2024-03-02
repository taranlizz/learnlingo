import { useState } from 'react';
import { HeaderStyled } from './Header.styled';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { IconButton } from '../IconButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderStyled>
      <Logo type="ukraine" size="28" />
      {isOpen ? (
        <Menu setIsOpen={setIsOpen} />
      ) : (
        <IconButton type="menu" size="24" onClick={setIsOpen} />
      )}
    </HeaderStyled>
  );
};

export default Header;
