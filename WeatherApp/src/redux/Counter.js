import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { decrease, increase, refresh } from './Slice/WeatherRealTimeSlice';
import Bar from './Bar';

// useSelector ise bizim oluşturduğumuz propertiyi çekmeye yarıyor.
//useDispatch ise  property için oluşturduğumuz methodlara ulasmayı sağlar
const Counter = () => {
    const dispatch=useDispatch();
    const counter= useSelector((state)=>state.counter);

  return (
    <View>
      <Text>{counter.count}</Text>
      <TouchableOpacity onPress={()=>dispatch(increase())}>
      <View>
            <Text>{"Increase"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dispatch(decrease())}>
      <View>
            <Text>{"Decrease"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dispatch(refresh())}>
      <View>
            <Text>{"Refresh"}</Text>
        </View>
      </TouchableOpacity>
      <Bar/>
    </View>
  )
}

export default Counter

