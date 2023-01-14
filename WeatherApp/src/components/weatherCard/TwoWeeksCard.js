import { StyleSheet, Text, View } from 'react-native'
import Icon from '../../assets/svgs/sunny.svg'
import React from 'react'
import { units } from '../../themes/Units'

const TwoWeeksCard = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={{fontWeight:'bold',fontSize:17,color:'black'}} >Bugün</Text>
        <Text style={{color:'black'}}>Açık</Text>
      </View>
      <View style={styles.rightContainer}>
        <View>
            <Icon width={60} height={60} />
        </View>
        <View style={styles.textContent}>
            <Text style={{fontWeight:'bold',fontSize:17,color:'black'}}>0°</Text>
            <Text style={{fontSize:17,color:'black'}}>-7°</Text>
        </View>
      </View>
    </View>
  )
}

export default TwoWeeksCard

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 15,
        width:units.width/1,
        backgroundColor: '#CFF5E7',
        height:units.height/10,
        borderBottomWidth: 2,
        borderBottomColor:'#0D4C92',
    },
    rightContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:units.width/4.5,
        marginRight:15
    },
    textContent:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
})