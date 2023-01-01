import { StyleSheet, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchButton = ({navigation}) => {
  return (
    <View>
      <Icon name='search' size={25} color="black" onPress={()=> navigation.navigate("Search")}/>
    </View>
  )
}

export default SearchButton

const styles = StyleSheet.create({})