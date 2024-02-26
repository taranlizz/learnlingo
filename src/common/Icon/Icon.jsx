import PropTypes from 'prop-types';

const Icon = ({ type, size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`src/images/svg/sprite.svg#icon-${type}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Icon;
