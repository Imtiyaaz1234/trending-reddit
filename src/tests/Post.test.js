import React from 'react';
import { mount, configure} from 'enzyme';
import { Post } from '../components/Post';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

test('renders Post component', () => {
    const PostComponent = mount(<Post />)
})
