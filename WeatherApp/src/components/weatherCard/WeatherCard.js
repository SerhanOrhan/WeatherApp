import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../assets/svgs/sun-sunny.svg'
import { units } from '../../themes/Units'

const WeatherCard = ({ hour, icon, degree }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.degree}>{degree}</Text>
            </View>

            <View style={styles.content}>
                <Icon width={45} height={45} />
            </View  >
            <View style={styles.content} >
                <Text style={styles.hour}>{hour}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D4C92',
        width: units.width / 6.5,
        height: units.height / 6.5,
        padding: 5,
        marginLeft: 10,
        marginTop: 30,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,

    },
    content: {
        paddingTop:3,
        paddingBottom:3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hour: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    degree: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
})
export default WeatherCard

