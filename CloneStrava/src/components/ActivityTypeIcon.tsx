import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface ActivityTypeIconProps {
  name: string;
  size: number;
}

export default ({name, size}: ActivityTypeIconProps) => {
  return <MaterialIcons name={name} color="#666" size={size} />;
};
