import React from 'react';
import { mount, configure } from 'enzyme';
import { PostList } from '../components/PostList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

test('renders Post List', () => {
    const PostComponent = mount(<PostList />)
})
