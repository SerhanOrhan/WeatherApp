import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { units } from '../../themes/Units'


const RainCard = ({percent,icon,hour}) => {
    return (
        <View>
            <View style={styles.rainCardContent}>
                <Text style={styles.rainCardText}>{percent}</Text>
                <Icon name='water-outline' size={40} color="white"/>
                <Text style={styles.rainCardText}>{hour}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        padding:8
    },
    rainCardContent:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor: '#0D4C92',
        width:units.width/7.5,
        height:units.height/7.5,
        padding:5,
        paddingTop:10,
        borderRadius:20,
        margin:5
    },
    rainCardText:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
    }
})

export default RainCard
