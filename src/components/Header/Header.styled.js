import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  height: 60px;
  background-color: var(--grey);
  color: var(--text-color);
  padding: 20px;
  text-align: center;
`;

export const BoxNav = styled.nav`
  display: inline-block;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--text-color);
  margin-left: 20px;
  font-size: 20px;

  &.active {
    color: var(--red-hover);
  }
`;
