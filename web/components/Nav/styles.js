import styled from 'styled-components';

const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.primary100};
  height: 100vh;
  max-width: 20rem;
  padding: 1rem;
  position: fixed;
  width: 100%;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 0 0.5rem;
  }
`;

export { Aside, NavList };
