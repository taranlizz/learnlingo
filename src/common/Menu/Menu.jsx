import PropTypes from 'prop-types';
import { MenuWrapper, MenuBackdrop } from './Menu.styled';
import { IconButton } from '../IconButton';
import { UserInfo } from '../UserInfo';
import { AppNav } from '../AppNav';
import { AuthNav } from '../AuthNav';

const Menu = ({ setIsOpen }) => {
  return (
    <MenuBackdrop>
      <MenuWrapper>
        <IconButton type="close" size="18" onClick={() => setIsOpen(false)} />
        <UserInfo />
        <AppNav />
        <AuthNav />
      </MenuWrapper>
    </MenuBackdrop>
  );
};

Menu.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Menu;
