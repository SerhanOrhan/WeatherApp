import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToggleButon from './ToggleButon'
import SearchButton from './SearchButton'
import { useSelector } from 'react-redux'

const HomeTabBarContent = ({navigation}) => {
  const weatherRealtimeModel = useSelector((state) => state.weatherRealtimeModel);
  const wordArray = weatherRealtimeModel.location.name.split(',').map(item => item.slice(item.indexOf(',') + 1));

  return (
    <View style={styles.container}>
      <ToggleButon/>
      <Text>{wordArray[0]}/{wordArray[1]}</Text>
      <SearchButton navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      alignItems:'center',
      justifyContent:'space-between',
      display:'flex',
      flexDirection:'row',
      padding:5,
      margin:0
  }
})
export default HomeTabBarContent
