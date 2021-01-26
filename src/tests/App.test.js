import React from 'react';
import { mount, configure } from 'enzyme';
import { App } from '../App';
import { Header } from '../containers/Header';
import { PostList } from '../components/PostList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('renders App Component', () => {
  const AppComponent = mount(
    <App />
  );

  describe('Contains Components', () => {
    test('contains all components', () => {
      const getComponents = AppComponent.containsAllMatchingElements([<Header />, <PostList />])
      expect(getComponents).toBeTrue();
    })
  })
});
