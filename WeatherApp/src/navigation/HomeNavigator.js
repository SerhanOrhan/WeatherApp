import {  StyleSheet } from 'react-native'
import React from 'react'
import Tomorrow from '../screens/Tomorrow';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialNavigator from './MaterialNavigator';


const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarLabelStyle: { fontSize: 14 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }}
  >
    <Stack.Screen
      name={"Home"}
      component={MaterialNavigator}
      options={{ tabBarLabel: 'Bugün',headerShown:false }}
    />
     <Stack.Screen
      name={"Search"}
      component={Tomorrow}
      options={{ tabBarLabel: 'Yarın' }}
    />
  </Stack.Navigator>



































  //   <Tab.Navigator
  //   initialRouteName="HomeScreen"
  //   tabBar={HomeTabBarContent}
  //   screenOptions={{
  //     tabBarActiveTintColor: '#e91e63',
  //     tabBarLabelStyle: { fontSize: 14 },
  //     tabBarStyle: { backgroundColor: 'powderblue' },
  //   }}
  // >
  //   <Tab.Screen
  //     name={routes.home[0].name}
  //     component={routes.home[0].component}
  //     options={{ tabBarLabel: 'Bugün' }}
  //   />
  //   <Tab.Screen
  //     name={routes.tomorrow[0].name}
  //     component={routes.tomorrow[0].component}
  //     options={{ tabBarLabel: 'Yarın' }}
  //   />
  //   <Tab.Screen
  //     name={routes.twoWeeks[0].name}
  //     component={routes.twoWeeks[0].component}
  //     options={{ tabBarLabel: '14 Gün' }}
  //   />
  //   <Tab.Screen
  //     name={"home2"}
  //     component={HomeTopStackNavigator}
  //     options={{headherShown:false}}
  //   />
  // </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default HomeNavigator
