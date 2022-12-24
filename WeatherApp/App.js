import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from './src/navigation/HomeNavigator'
import HomeTabBarContent from './src/components/homeTabBar/HomeTabBarContent'

const App = () => {
  return (
    <NavigationContainer>
      <HomeTabBarContent/>
      <HomeNavigator/>
    </NavigationContainer>
  )
}

export default App
