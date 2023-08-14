/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabList } from '../TabList';

import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { TabSearchScreen } from './TabSearch';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'android') ? 10 : 0,
        },
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255, 0.95)',
          borderWidth: 0,
          elevation: 0,
          position: 'absolute',
          height: (Platform.OS === 'android') ? 60 : 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={TabList}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => <Icon color={color} size={size} name="list-outline" />
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={TabSearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => <Icon color={color} size={size} name="search-outline" />
        }}
      />
    </Tab.Navigator>
  );
};
