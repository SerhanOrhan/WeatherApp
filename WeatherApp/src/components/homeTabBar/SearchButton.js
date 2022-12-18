import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchButton = () => {
  return (
    <View>
      <Icon name='search' size={25} color="black"/>
    </View>
  )
}

export default SearchButton

const styles = StyleSheet.create({})