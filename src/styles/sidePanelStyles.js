import styled from '@emotion/styled';
import { flex } from './flex'
import { breakpoints, smallerThan, widerThan } from './responsive'
import { IoMdArrowRoundUp, IoMdArrowRoundDown, IoMdArrowRoundBack } from "react-icons/io";

export const DivContainerSide = styled.div`
    ${smallerThan(breakpoints.medium)} {display: none};
    ${widerThan(breakpoints.medium)} {display: flex};
    ${flex.centerHorizontalV};
    flex-direction: column;
    width: 40px;
    background-color: rgb(204, 204, 204);
    padding: 8px 5px 0 5px;
    z-index: 5;
    position: relative;
`

export const Button = styled.button`
    background-color: inherit;
    border: none;
`

export const SpanScore = styled.span`
    font-weight: 700;
`

const iconStyle = `
    font-size: 20px;
    color: #6c757d;
`

const iconStyleLeft = `
    font-size: 20px;
    color: white;
`

export const IconRoundUp = styled(IoMdArrowRoundUp)`
    ${iconStyle}
`

export const IconRoundDown = styled(IoMdArrowRoundDown)`
    ${iconStyle}
`

export const IconRoundLeft = styled(IoMdArrowRoundBack)`
    ${iconStyleLeft}
`
