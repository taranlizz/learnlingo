import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../Icon';

const LogoText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Logo = props => {
  return (
    <LogoDiv>
      <Icon {...props} />
      <LogoText>LearnLingo</LogoText>
    </LogoDiv>
  );
};

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Logo;
