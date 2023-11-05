import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthor } from './Slice/WeatherRealTimeSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Bar = () => {
    const dispatch=useDispatch();
    const author=useSelector(state=>state.counter);
  return (
    <View>
      <Text>Name:{author.author.name}</Text>
      <Text>Surname:{author.author.surname}</Text>
      <TouchableOpacity onPress={()=>dispatch(setAuthor({name:"Betül",surname:"Kemerkaya"}))}>
      <View>
            <Text>Change</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Bar