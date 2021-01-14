import styled, { css } from 'styled-components';

import {
  Home,
  Explore,
  Notification,
  Messages,
  Bookmarks,
  Lists,
  Profile,
  More,
  TwitterBird,
  Dots,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: hidden;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(TwitterBird)`
  width: 41px;
  height: 41px;

  margin-bottom: 20px;
  padding-left: 10px;

  cursor: pointer;
  border-radius: 0px;

  border &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
    padding-left: 10px;
    padding-bottom: 6.5px;
  }

  padding: 5px;
  outline: 0;

  & + button {
    margin-top: 10px;
  }

  & + button:last-child {
    margin-top: 15px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS};
`;

export const ExploreIcon = styled(Explore)`
  ${iconCSS};
`;

export const NotificationsIcon = styled(Notification)`
  ${iconCSS};
`;

export const MessagesIcon = styled(Messages)`
  ${iconCSS};
`;

export const BooksmarksIcon = styled(Bookmarks)`
  ${iconCSS};
`;

export const ListsIcon = styled(Lists)`
  ${iconCSS};
`;

export const ProfileIcon = styled(Profile)`
  ${iconCSS};
`;

export const MoreIcon = styled(More)`
  ${iconCSS};
`;

export const BotSide = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;
    padding: 10px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIconDots = styled(Dots)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;

    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
