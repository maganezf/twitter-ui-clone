import React from 'react';

import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BooksmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIconDots,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <NotificationsIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <MessagesIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <BooksmarksIcon />
          <span>Booksmarks</span>
        </MenuButton>

        <MenuButton>
          <ListsIcon />
          <span>Lists</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>More</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Maganez</strong>
          <span>@maganezz</span>
        </ProfileData>

        <ExitIconDots />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
