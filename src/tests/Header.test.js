import React from 'react';
import { mount, configure} from 'enzyme';
import { Header } from '../containers/Header';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('renders Header component', () => {
    const HeaderComponent = mount(<Header />)

    describe('Header Content', () => {
        const getText = HeaderComponent.find('h1').text()
        const getLogo = HeaderComponent.find('img')
        test('Contains Site Title', () => {
            expect(getText).toEqual('Trending SubReddits');
        })
        test('Site Title is string', () => {
            expect(getText).toBeString();
        })
        test('Contains Site Logo', () => {
            expect(getLogo).toHaveLength(1)
        })
    })
})
