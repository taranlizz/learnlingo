import {
  UserInfoEmail,
  UserInfoName,
  UserInfoWrapper,
} from './UserInfo.styled';

const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <UserInfoName>Lisa Taran</UserInfoName>
      <UserInfoEmail>lisataran120@mail.com</UserInfoEmail>
    </UserInfoWrapper>
  );
};

export default UserInfo;
