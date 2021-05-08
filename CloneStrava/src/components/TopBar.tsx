import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const Container = styled.View`
  align-self: stretch;
  height: 52px;
  flex-direction: row;
  background-color: #fc6100;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const StartContent = styled.View``;

const StartTitle = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 24px;
`;

const RightView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

const TopTabButton = styled.TouchableOpacity`
  justify-content: space-between;
`;

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
