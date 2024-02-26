import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../Icon';

const IconBtnStyled = styled.button`
  background-color: transparent;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

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
