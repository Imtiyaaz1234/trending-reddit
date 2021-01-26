import React from 'react';
import Feeds from './Feeds';
import SideHolder from './SideHolder';
import RedditPremium from './RedditPremium';
import { Aside } from '../styles/sideMenuStyle';

const SideMenu = () => {
  return (
    <Aside>
      <Feeds />
      <SideHolder />
      <RedditPremium />
      <SideHolder />
    </Aside>
  );
}

export default SideMenu;
