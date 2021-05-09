import React from 'react';
import styled from 'styled-components/native';
import {ActivityModel} from '../models/ActivityModel';
import ActivityTypeIcon from './ActivityTypeIcon';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  margin-bottom: 8px;
  background-color: #fff;
`;

const UserNameText = styled.Text`
  margin-top: 5px;
  justify-content: flex-start;
  font-weight: bold;
`;

const TopContentArea = styled.View`
  flex-direction: row;
  margin-right: 30px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  margin-right: 10px;
`;

const AreaBelowName = styled.View``;

const DateAndCityText = styled.Text`
  font-size: 12px;
  margin-left: 10px;
`;

const DotText = styled.Text`
  margin-left: 5px;
`;

const DescriptionArea = styled.View`
  flex-direction: row;
  width: 50%;
`;

const DescriptionText = styled.Text`
  font-weight: bold;
  text-align: auto;
`;

const ActivityDetailsArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

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
      <TopContentArea>
        <Avatar source={{uri: data.url}} />

        <AreaBelowName>
          <UserNameText>{data.username}</UserNameText>
          <DescriptionArea>
            <ActivityTypeIcon name={data.type} size={18} />
            <DateAndCityText>{data.date.toLocaleDateString()}</DateAndCityText>
            <DotText>•</DotText>
            <DateAndCityText>{data.city}</DateAndCityText>
          </DescriptionArea>
        </AreaBelowName>
      </TopContentArea>

      <DescriptionText>{data.description}</DescriptionText>

      <ActivityDetailsArea>
        <LengthText>{data.length}km</LengthText>
        <ElevationText>{data.elevation}m</ElevationText>
      </ActivityDetailsArea>

      <KudosArea>
        <KudosText>{data.kudos}</KudosText>
      </KudosArea>
    </Container>
  );
};
