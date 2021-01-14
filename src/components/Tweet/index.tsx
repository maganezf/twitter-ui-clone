import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetedIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        You Retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Code Now</strong>
            <span>@code_now</span>
            <Dot />
            <time>January, 08 at 2021</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>
            🚀 Rocket has no turn 🚀 #NeverStopLearning 🚀
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              90
            </Status>

            <Status>
              <RetweetedIcon />
              999
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
