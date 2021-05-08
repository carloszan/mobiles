import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
  height: 52px;
  flex-direction: row;
  background-color: #fc6100;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const StartContent = styled.View``;

export const StartTitle = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 24px;
`;

export const RightView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

export const TopTabButton = styled.TouchableOpacity`
  justify-content: space-between;
`;
