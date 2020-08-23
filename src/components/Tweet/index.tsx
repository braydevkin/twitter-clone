import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
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
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Brayan Quirino</strong>
            <span>@brayqui</span>
            <Dot />
            <time>22 de Ago</time>
          </Header>
          <Description>Foguete não tem ré 🚀</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              23
            </Status>
            <Status>
              <RetweetIcon />
              12
            </Status>
            <Status>
              <LikeIcon />
              863
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
