import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { IconBtnStyled } from './IconButton.styled';

const IconButton = ({ type, size, onClick }) => {
  return (
    <IconBtnStyled onClick={onClick}>
      <Icon type={type} size={size} />
    </IconBtnStyled>
  );
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
