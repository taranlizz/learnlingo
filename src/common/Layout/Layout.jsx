import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
