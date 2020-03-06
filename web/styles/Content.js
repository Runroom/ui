import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  min-height: 100%;

  main { width: 100%; }

  .section {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutro200};
    margin: 3rem 0;
    padding-bottom: 3rem;
  }
`;

export default Content;
