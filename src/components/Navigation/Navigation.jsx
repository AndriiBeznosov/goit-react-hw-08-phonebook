import { useAuth } from 'hooks';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      {/* <NavItem to="/contacts">Contacts</NavItem> */}
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </nav>
  );
};
