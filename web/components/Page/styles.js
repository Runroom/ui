import styled from 'styled-components';

import { theme } from '../../config';

const PageWrapper = styled.div`
    padding: 1rem;
    width: 100%;

    &.sidebar { padding-left: 21rem; }

    main {
        display: flex;
        min-height: 100%;
        width: 100%;

        .section {
          border-bottom: 1px solid ${theme.colors.neutro200};
          margin: 3rem 0;
          padding-bottom: 3rem;
        }
    }
`;

export default PageWrapper;