import styled from '@emotion/styled';
import { flex } from './flex';

import background from '../img/banner@2x.png';
import guyIcon from '../img/snoo-home@2x.png';

export const CardContainer = styled.div`
    margin-top: 0;
    position: relative;
    left: -90px;
`

export const Landscape = styled.div`
    background: rgb(0, 121, 211) no-repeat scroll center center / cover;
    background-image: url(${background});
    height: 34px;
`

export const GuyContainer = styled.div`
    ${flex.horizontal}
    margin-top: -23px;
    padding: 12px;
    border: 1px solid;
    border-color: silver;
`

export const GuyIcon = styled.div`
    background: rgba(0, 0, 0, 0) repeat scroll 0% 0% / 40px 68px;
    background-image: url(${guyIcon});
    display: inline-block;
    height: 68px;
    width: 40px;
`

export const H6Feeds = styled.h6`
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    display: inline-block;
    margin: 40px 0 0 10px;
`

export const PFeeds = styled.p`
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 12px;
    margin: 0;
    border: 1px solid;
    border-color: silver;
`
