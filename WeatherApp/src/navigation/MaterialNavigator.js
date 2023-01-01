import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { routes } from './routes';
import HomeTabBarContent from '../components/homeTabBar/HomeTabBarContent';

const Tab = createMaterialTopTabNavigator();

const MaterialNavigator = () => {
  return (
    <Tab.Navigator
    tabBar={HomeTabBarContent}
    initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }}
  >
    <Tab.Screen
      name={routes.home[0].name}
      component={routes.home[0].component}
      options={{ tabBarLabel: 'Bugün' }}
    />
    <Tab.Screen
      name={routes.tomorrow[0].name}
      component={routes.tomorrow[0].component}
      options={{ tabBarLabel: 'Yarın' }}
    />
    <Tab.Screen
      name={routes.twoWeeks[0].name}
      component={routes.twoWeeks[0].component}
      options={{ tabBarLabel: '14 Gün' }}
    />
  </Tab.Navigator>
  )
}

export default MaterialNavigator
