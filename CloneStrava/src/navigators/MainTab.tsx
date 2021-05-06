import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feed from '../screens/Feed';
import Explorer from '../screens/Explorer';
import Record from '../screens/Record';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Explorer" component={Explorer} />
    <Tab.Screen name="Record" component={Record} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
