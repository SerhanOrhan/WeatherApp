import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../assets/svgs/sunny.svg'
import { units } from '../../themes/Units'

const WeatherCard = ({hour,icon,degree}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content} >
                <Text style={styles.hour}>{hour}</Text>
            </View>
            <View style={styles.content}>
                <Icon width={50} height={50} />
            </View  >
            <View  style={styles.content}>
                <Text style={styles.degree}>{degree}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D4C92',
        width: units.width / 7.5,
        height: units.height / 6.5,
        padding: 5,
        marginLeft: 10,
        marginTop: 30,
        marginBottom:20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hour: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    degree: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft:4
    }
})
export default WeatherCard

