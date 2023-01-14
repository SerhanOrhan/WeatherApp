import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TwoWeeksCard from '../components/weatherCard/TwoWeeksCard'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const TwoWeeks = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
          <TwoWeeksCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default TwoWeeks

const styles = StyleSheet.create({})