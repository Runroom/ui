import styled from 'styled-components';

import { theme } from '../../config';
import { columns } from '../../styles/helpers';
import { media } from '../../styles/media-queries';
import { space } from '../../styles/rhythm';
import { pixelate } from '../../utils/helpers';

const PageWrapper = styled.div`
  padding: ${space()} 0;
  width: 100%;

  &.sidebar { padding-left: 20rem; }

  main {
    min-height: 100%;
    width: 100%;

    .section {
      border-bottom: 1px solid ${theme.colors.neutro300};
      margin: ${space(2)} 0;
      padding-bottom: ${space()};

      &:last-child { border-bottom: 0; }
    }
  }
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${pixelate(theme.layout.maxContentWidth)};
  padding: 0 ${space()};
  width: 100%;

  ${media.min('tablet')`
    padding: 0 ${space(2)};
  `};
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

    ${media.min('maxWidth')`
      ${columns(3, 2)}
    `}
  }
`;

export default PageWrapper;
export { CardsList, Wrapper };
