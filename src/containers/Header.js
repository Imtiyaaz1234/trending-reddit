import { React, Component }  from 'react';
import { HeaderContainer, InnerContainer, HeaderTitle } from '../styles/headerStyles';

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <InnerContainer>
                    <HeaderTitle>Trending SubReddits</HeaderTitle>
                </InnerContainer>
            </HeaderContainer>
        )
    }
}
