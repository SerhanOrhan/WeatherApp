import { FlatList, StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../../assets/svgs/sunny.svg'
import WeatherCard from '../weatherCard/WeatherCard'
import { hours, precipitation } from '../../themes/hours'
import { units } from '../../themes/Units'
import RainCard from '../weatherCard/RainCard'


const HomeBodyContent = () => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={{ paddingTop: 10, backgroundColor: '#CFF5E7' }}>
            <View style={{ paddingTop: 10, paddingStart: 12 }}>
                <Text style={{ fontWeight: '400' }}>Aralık 18, 12:47</Text>
            </View>
            <View style={styles.iconContext}>
                <Text style={styles.bodyText}>
                    10 °
                </Text>
                <Logo width={180} height={180} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                <View style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, alignItems: 'center' }}>
                        Hissedilen  10 °
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        Gece 5 ° ↓ Gündüz 14 ° ↑
                    </Text>
                </View>
                <Text style={{ fontSize: 26 }}>
                    Çok Güneşli
                </Text>
            </View>
            <View>
                <FlatList
                    data={hours}
                    keyExtractor={(item, index) => item.id + index.toString()}
                    horizontal
                    renderItem={({ item, index }) =>
                        <WeatherCard index={index} hour={item.hour} icon={item.icon} degree={item.degree} />
                    }
                />
            </View>
            <View style={styles.line}></View>
            <View style={{marginBottom:18}}>
                <View style={styles.detailHeaderContent}>
                    <Text style={styles.detailHeaderText}>Güncel Detaylar</Text>
                </View>
                <View style={styles.detailListContext}>
                <View>
                    <Text style={styles.detailListText}>Nem Oranı</Text>
                    <Text style={styles.detailListText}>Basınç</Text>
                    <Text style={styles.detailListText}>UV İndeksi</Text>
                </View>
                <View>
                    <Text style={styles.detailListText}>77%</Text>
                    <Text style={styles.detailListText}>1023 mBar</Text>
                    <Text style={styles.detailListText}>Düşük</Text>
                </View>
                </View>
            </View>
            <View style={styles.line}></View>
            <View>
            <View style={styles.main}>
                <Text style={styles.mainText}>Yağış</Text>
            </View>
            <FlatList
                    data={precipitation}
                    keyExtractor={(item, index) => item.id + index.toString()}
                    horizontal
                    renderItem={({ item, index }) =>
                        <RainCard index={index} hour={item.hour} icon={item.icon} percent={item.percent} />
                    }
                />
            </View>
            <View>
                <Text style={styles.bottomText}>Toplam günlük hacim 0,0 mm</Text>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    iconContext: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingStart: 10
    },
    bodyText: {
        fontSize: 90,
        fontWeight: 'bold'
    },
    line: {
        height: 2,
        backgroundColor: '#0D4C92',
    },
    detailHeaderContent: {
        paddingTop:10,
        paddingLeft:16,
    },
    detailHeaderText:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    detailListContext: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        width: units.width / 2,
        paddingStart:15        
    },
    detailListText:{
        fontSize:16,
        fontWeight:'400',
        color:'black'
    },
    mainText:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        padding:10
    },
    bottomText:{
        fontSize:15,
        fontWeight:'500',
        color:'black',
        padding:10
    }
})

export default HomeBodyContent
