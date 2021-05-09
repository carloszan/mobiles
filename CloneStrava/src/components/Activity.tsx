import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {ActivityModel} from '../models/ActivityModel';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  margin-bottom: 8px;
`;

interface ActivityProps {
  data: ActivityModel;
}

export default ({data}: ActivityProps) => {
  return (
    <Container>
      <Text>{data.username}</Text>
      <Text>{data.date.toDateString()}</Text>
      <Text>{data.city}</Text>
      <Text>{data.description}</Text>
      <Text>{data.length}</Text>
      <Text>{data.elevation}</Text>
      <Text>{data.kudos}</Text>
    </Container>
  );
};
