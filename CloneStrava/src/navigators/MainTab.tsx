import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Start from '../screens/Start';
import Maps from '../screens/Maps';
import Groups from '../screens/Groups';
import Record from '../screens/Record';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen name="Start" component={Start} />
    <Tab.Screen name="Maps" component={Maps} />
    <Tab.Screen name="Record" component={Record} />
    <Tab.Screen name="Groups" component={Groups} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
