import { IconButton } from '../IconButton';

const Menu = () => {
  return (
    <IconButton
      type="menu"
      size="24"
      onClick={() => {
        console.log('Hi!');
      }}
    />
  );
};

export default Menu;
