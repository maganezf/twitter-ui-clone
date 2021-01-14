import React from 'react';

import ProfilePage from '../ProfilePage/index';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellNotificationIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = props => (
  <Container>
    <Header>
      <button type="button">
        <BackIcon />
      </button>

      <ProfileInfo>
        <strong>Maganez</strong>
        <span>65 Tweets</span>
      </ProfileInfo>
    </Header>

    <ProfilePage />

    <BottomMenu>
      <HomeIcon />
      <SearchIcon />
      <BellNotificationIcon />
      <EmailIcon />
    </BottomMenu>
  </Container>
);

export default Main;
