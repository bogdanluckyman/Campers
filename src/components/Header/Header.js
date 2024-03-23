import { Box, BoxNav, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <Box>
      <BoxNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorite</StyledLink>
      </BoxNav>
    </Box>
  );
};

export default Header;
