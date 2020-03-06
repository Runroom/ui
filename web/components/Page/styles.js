import styled from 'styled-components';

import { theme } from '../../config';
import { columns } from '../../styles/helpers';
import { media } from '../../styles/media-queries';

const PageWrapper = styled.div`
  padding: 1rem;
  width: 100%;

  &.sidebar { padding-left: 21rem; }

  main {
    min-height: 100%;
    width: 100%;

    .section {
      border-bottom: 1px solid ${theme.colors.neutro200};
      margin: 3rem 0;
      padding-bottom: 3rem;

      &:last-child { border-bottom: 0; }
    }
  }
`;

const CardsList = styled.ul`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  li {

    ${media.min('tablet')`
      ${columns(2)}
    `}

    ${media.min('desktop')`
      ${columns(3)}
    `}
  }
`;

export default PageWrapper;
export { CardsList };
