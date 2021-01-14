import React from 'react';

import Tweet from '../Tweet';

import { Container, TabContainer, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <TabContainer>
        <Tab>Tweets</Tab>
        <Tab>Tweets & replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </TabContainer>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
