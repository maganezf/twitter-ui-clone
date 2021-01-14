import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchBar,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="What’s happening"
            elements={[<News />, <News />, <News />, <News />]}
          />

          <List
            title="Who to follow"
            elements={[
              <FollowSuggestion name="User1" nickname="@user1" />,

              <FollowSuggestion name="User2" nickname="@user2" />,
              <FollowSuggestion name="User3" nickname="@user3" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
