import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';

const Lauout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
export default Lauout;
