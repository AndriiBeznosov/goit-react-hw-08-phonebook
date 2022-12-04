import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  font-size: 34px;
  font-weight: 700;
  text-decoration: none;
  color: ${p => p.theme.colors.colorText};

  &:last-child {
    margin-left: 20px;
  }

  &.active,
  &:hover {
    color: ${p => p.theme.colors.colorAccent};
  }
`;
