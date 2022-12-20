import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/svgs/sunny.svg'
import WeatherCard from '../weatherCard/WeatherCard'
import { hours } from '../../themes/hours'

const HomeBodyContent = () => {
    return (
        <View style={{ paddingTop: 10,backgroundColor:'#CFF5E7'}}>
            <View style={{paddingTop:10,paddingStart:12}}>
                <Text style={{ fontWeight: '400' }}>Aralık 18, 12:47</Text>
            </View>
            <View style={styles.iconContext}>
                <Text style={styles.bodyText}>
                    10 °
                </Text>
                <Logo width={180} height={180} />
            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',}}>
                <View style={{padding:0,display:'flex',alignItems:'center'}}>
                <Text style={{fontSize:16,alignItems:'center'}}>
                    Hissedilen  10 °
                </Text>
                <Text style={{fontSize:16}}>
                   Gece 5 ° ↓ Gündüz 14 ° ↑
                </Text>
                </View>
                <Text style={{fontSize:26}}>
                    Çok Güneşli
                </Text>
            </View>
            <View>
                <FlatList
                data={hours}
                keyExtractor={(item,index)=>item.id+index.toString()}
                horizontal
                renderItem={({item,index})=>
                <WeatherCard hour={item.hour} icon={item.icon} degree={item.degree} />
                  }
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    iconContext: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingStart:10
    },
    bodyText: {
        fontSize: 90,
        fontWeight: 'bold'
    }
})

export default HomeBodyContent
