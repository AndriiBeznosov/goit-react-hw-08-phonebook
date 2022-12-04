import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';

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
