import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToggleButon from './ToggleButon'
import SearchButton from './SearchButton'

const HomeTabBarContent = () => {
  return (
    <View style={styles.container}>
      <ToggleButon/>
      <Text>Ankara</Text>
      <SearchButton/>
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
