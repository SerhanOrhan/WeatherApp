import { StyleSheet, View } from 'react-native'
import React from 'react'
import HomeBodyContent from '../components/homeBody/HomeBodyContent'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLocation } from '../redux/Slice/WeatherRealTimeSlice';


const Home = () => {

  return (
    <View>
      <HomeBodyContent />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})