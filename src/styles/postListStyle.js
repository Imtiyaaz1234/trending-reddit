import { flex } from './flex'
import styled from '@emotion/styled';

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

export const H2Title = styled.h2`
    color: #ff9066;
    overflow-wrap: break-word;
    font-size: 18px;
    font-weight: 600;
    margin: 0 8px 0px 5px
`

export const Selftext = styled.div`
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-left: .25rem;
    max-height: 250px;
    overflow: hidden;
    mask-image: linear-gradient(180deg, #000 60%, transparent);
`
