import React from 'react';
import styled from 'styled-components/native';
import {ActivityModel} from '../models/ActivityModel';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  margin-bottom: 8px;
`;

const TextName = styled.Text``;

const AreaBelowName = styled.View``;

const DateAndCityText = styled.Text``;

const DescriptionText = styled.Text``;

const ActivityDetailsArea = styled.View``;

const LengthText = styled.Text``;

const ElevationText = styled.Text``;

const KudosArea = styled.View``;

const KudosText = styled.Text``;

interface ActivityProps {
  data: ActivityModel;
}

export default ({data}: ActivityProps) => {
  return (
    <Container>
      <TextName>{data.username}</TextName>

      <AreaBelowName>
        <DateAndCityText>{data.type}</DateAndCityText>
        <DateAndCityText>{data.date.toDateString()}</DateAndCityText>
        <DateAndCityText>{data.city}</DateAndCityText>
      </AreaBelowName>

      <DescriptionText>{data.description}</DescriptionText>

      <ActivityDetailsArea>
        <LengthText>{data.length}</LengthText>
        <ElevationText>{data.elevation}</ElevationText>
      </ActivityDetailsArea>

      <KudosArea>
        <KudosText>{data.kudos}</KudosText>
      </KudosArea>
    </Container>
  );
};
