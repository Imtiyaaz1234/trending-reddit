import styled from '@emotion/styled';
import { flex } from './flex'
import { IoMdRose } from "react-icons/io"


export const Card = styled.div`
    ${flex.horizontal};
    ${flex.centerHorizontal};
    padding: 8px 12px;
    position: relative;
    left: -90px;
`

export const DivText = styled.div`
    padding-right: .25rem;
    border: 1px solid;
    border-color: silver;
`

export const H6Title = styled.h6`
    font-weight: 600;
    margin-bottom: 5px;
`

export const IconRose = styled(IoMdRose)`
    font-size: 1.5rem;
    margin-right: .5rem;
`
