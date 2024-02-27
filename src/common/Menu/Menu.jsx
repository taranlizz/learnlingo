import PropTypes from 'prop-types';
import { IconButton } from '../IconButton';
import { MenuWrapper } from './Menu.styled';

const Menu = ({ setIsOpen }) => {
  return (
    <MenuWrapper>
      <IconButton type="close" size="18" onClick={() => setIsOpen(false)} />
    </MenuWrapper>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Menu;
