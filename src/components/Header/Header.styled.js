import styled from 'styled-components';
import colors from '../../styles/colors';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  height: 60px;
  background-color: ${colors.grey};
  color: ${colors.black};
  padding: 20px;
  text-align: center;
`;

export const BoxNav = styled.nav`
  display: inline-block;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  margin-left: 20px;
  font-size: 20px;

  &.active {
    color: ${colors.red};
  }
`;
