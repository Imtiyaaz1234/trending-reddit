import styled from '@emotion/styled';
import { flex } from './flex'
import { breakpoints, smallerThan, widerThan } from './responsive'

export const Aside = styled.aside`
    ${smallerThan(breakpoints.medium)} {display: none};
    ${widerThan(breakpoints.medium)} ${flex.vertical};
    width: 312px;
    margin: 30px 0 0 150px;
`
