import { Outlet } from 'react-router-dom';

import { StyledLink, Nav } from './SharedLayoutStyles.js';

export default function SharedLayout() {
  return (
    <>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Nav>
      <Outlet />
    </>
  );
}
