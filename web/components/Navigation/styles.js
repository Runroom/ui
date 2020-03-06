import styled from 'styled-components';

const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.neutro100};
  height: 100vh;
  left: 0;
  max-width: 20rem;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 0 0.5rem;
  }

  a.active { text-decoration: underline; }
`;

export { Aside, NavList };
