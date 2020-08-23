import React from 'react';
import SticyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestions from '../FollowSuggestions';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <SticyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions name="Ana Baeta" nickname="@anbaeta" />,
              <FollowSuggestions name="Williams Lopes" nickname="@nsetew" />,
              <FollowSuggestions
                name="Cristiane Oliveira"
                nickname="@crisoliver"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </SticyBox>
      
    </Container>
  );
};

export default SideBar;
