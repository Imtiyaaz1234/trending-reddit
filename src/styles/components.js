import styled from '@emotion/styled';
import { flex } from './flex';
import { breakpoints, smallerThan, widerThan } from './responsive'

export const HorizontalContainer = styled.div`
    ${flex.horizontal};
    ${({ center }) => (center && flex.centerHorizontal)};
    ${({ centerV }) => (centerV && flex.centerHorizontalV)};
    ${({ centerH }) => (centerH && flex.centerHorizontalH)};
    ${({ margin }) => (margin && `margin: ${margin}`)};
    ${({ padding }) => (padding && `padding: ${padding}`)};
`

export const MainContainerPost = styled.main`
    ${smallerThan(breakpoints.large)} {width: 100%;};
    ${widerThan(breakpoints.large)} {width: 900px;};
    margin: 20px 100px;
    position: relative;
    right: -90px;
    border: 1px solid;
    border-color: silver;
`

export const Button = styled.button`
    background: #ff4500cf;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    height: 35px;
    outline: none;
    cursor: pointer;
    padding: 0 20px;
    margin: 10px 0;
    position: relative;
    right: -290px;
    &:hover {
        background: #aba3a1;
    }
    &:active {
        background: #aba3a1;
    }
`;

export const PostTitle = styled.h1`
    font-size: 28px;
    margin: 0;
    color: #ff9066;
`;

export const Author = styled.span`
    font-size: 14px;
    color: grey;
    position: relative;
    left: -290px;
`;
