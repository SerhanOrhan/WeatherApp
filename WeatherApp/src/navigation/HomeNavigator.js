import {  StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { routes } from './routes';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
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
      options={{ tabBarLabel: 'Home' }}
    />
    <Tab.Screen
      name={routes.tomorrow[0].name}
      component={routes.tomorrow[0].component}
      options={{ tabBarLabel: 'Tomorrow' }}
    />
    <Tab.Screen
      name={routes.twoWeeks[0].name}
      component={routes.twoWeeks[0].component}
      options={{ tabBarLabel: 'TwoWeeks' }}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default HomeNavigator
