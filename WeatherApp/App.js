import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigation/Navigator'
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store/RealTimeStore'

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
    </Provider>
  )
}

export default App
