import styled from '@emotion/styled';

import { breakpoints, smallerThan, widerThan } from './responsive'

export const MainContainer = styled.main`
    ${smallerThan(breakpoints.large)} {width: 100%;};
    ${widerThan(breakpoints.large)} {width: 900px;};
    margin: 20px 100px;
    position: relative;
    right: -90px
`
