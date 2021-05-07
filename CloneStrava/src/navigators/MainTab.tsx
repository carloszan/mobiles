import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Start from '../screens/Start';
import Maps from '../screens/Maps';
import Groups from '../screens/Groups';
import Record from '../screens/Record';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen
      name="Start"
      component={Start}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Maps"
      component={Maps}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="add-location" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Record"
      component={Record}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons
            name="radio-button-checked"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Groups"
      component={Groups}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="groups" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="account-circle" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
