import React from 'react';
import TopBar from '../../components/TopBar';
import {Container} from './styles';
import {ActivityModel} from '../../models/ActivityModel';
import Activity from '../../components/Activity';

const data: ActivityModel[] = [
  {
    id: 1,
    username: 'Carlos',
    type: 'bike',
    city: 'Sao Joao del Rei, Minas Gerais',
    date: new Date(Date.now()),
    description: 'Só pra saber a distancia 1',
    elevation: 406,
    length: 41.53,
    kudos: 2,
  },
  {
    id: 2,
    username: 'Carlos',
    type: 'bike',
    city: 'Sao Joao del Rei, Minas Gerais',
    date: new Date(Date.now() - 1000000000),
    description: 'Só pra saber a distancia 2',
    elevation: 34,
    length: 10.85,
    kudos: 1,
  },
];

export default () => {
  return (
    <Container>
      <TopBar />
      {data.map(activity => (
        <Activity key={activity.id} data={activity} />
      ))}
    </Container>
  );
};
