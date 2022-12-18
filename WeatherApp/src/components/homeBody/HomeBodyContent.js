import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/svgs/sunny.svg'

const HomeBodyContent = () => {
    return (
        <View style={{ paddingTop: 10 }}>
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
