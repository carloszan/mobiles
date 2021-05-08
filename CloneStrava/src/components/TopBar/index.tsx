import React from 'react';
import {
  Container,
  StartContent,
  StartTitle,
  RightView,
  TopTabButton,
} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default () => (
  <Container>
    <StartContent>
      <StartTitle>Start</StartTitle>
    </StartContent>

    <RightView>
      <TopTabButton>
        <MaterialIcons name="group" color="#FFF" size={32} />
      </TopTabButton>

      <TopTabButton>
        <MaterialIcons name="settings" color="#FFF" size={32} />
      </TopTabButton>

      <TopTabButton>
        <MaterialIcons name="notifications" color="#FFF" size={32} />
      </TopTabButton>
    </RightView>
  </Container>
);
