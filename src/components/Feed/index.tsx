import React from 'react';

import Tweet from '../Tweet';
import { Container, TabContainer, Tab, Tweets } from './styles';

export interface Props {
  selected?: boolean;
}

const Feed: React.FC<Props> = ({ selected }) => {
  return (
    <Container>
      <TabContainer>
        <Tab className={selected ? 'active' : ''}>Tweets</Tab>
        <Tab className={selected ? 'active' : ''}>Tweets & replies</Tab>
        <Tab className={selected ? 'active' : ''}>Media</Tab>
        <Tab className={selected ? 'active' : ''}>Likes</Tab>
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
