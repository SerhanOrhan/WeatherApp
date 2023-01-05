import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeTabBarContent from '../components/homeTabBar/HomeTabBarContent'
import MaterialNavigator from './MaterialNavigator'

const HomeNavigator = ({navigation}) => {
  return (
    <>
    <HomeTabBarContent navigation={navigation}/>
    <MaterialNavigator/>
    </>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})