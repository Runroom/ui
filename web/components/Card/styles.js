import styled from 'styled-components';

import { theme } from '../../config';
import { hover } from '../../styles/helpers';

const CardStyled = styled.div`
  a {
    text-decoration: none;

    ${hover`
      color: ${theme.colors.secondary300};
    `}
  }

  img {
    object-fit: cover;
    padding-bottom: calc(100 * 9 / 16);
  }
`;

export default CardStyled;
