import { AuthNavBtn, AuthNavWrapper } from './AutnNav.styled';

const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <AuthNavBtn>Log in</AuthNavBtn>
      <AuthNavBtn>Registration</AuthNavBtn>
    </AuthNavWrapper>
  );
};

export default AuthNav;
