import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  width: auto;
  height: 60px;
  border: 2px solid blue;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: #000;
`;
