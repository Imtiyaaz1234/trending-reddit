import styled from '@emotion/styled';
import { flex } from './flex';

export const DivCard = styled.div`
    margin: 15px;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
    transition: linear all 0.1s;
    &:hover {
        transition: linear all 0.1s;
        background: #ffeae2;
    }
`;

export const Title = styled.h2`
    color: black;
    overflow-wrap: break-word;
    font-size: 18px;
    font-weight: 600;
    margin: 0 8px 0px 5px;
    overflow: hidden;
    height: 55px;
`;

export const Author = styled.span`
    font-size: 14px;
    color: grey;
    position: relative;
    left: -290px;
    top: -10px;

`;

export const H2Title = styled.h2`
    color: #ff9066;
    overflow-wrap: break-word;
    font-size: 18px;
    font-weight: 600;
    margin: 0 8px 0px 5px
`

export const DivContainer = styled.div`
    ${flex.horizontal};
    background-color: white;
    overflow: hidden;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    cursor: pointer;
    margin: 10px 0px 15px 0px;
    position: relative;
    border-color: silver;
    height: 300px;

    :hover {
        border: 1px solid rgb(137, 137, 137);
    }

    :hover,
    :link,
    :visited,
    :link:active,
    :visited:active {
        color: inherit;
        text-decoration: none;
    }
`
