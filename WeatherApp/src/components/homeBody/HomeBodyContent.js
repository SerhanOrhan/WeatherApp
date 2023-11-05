import { FlatList, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/svgs/sun-sunny.svg'
import WeatherCard from '../weatherCard/WeatherCard'
import { hours, precipitation } from '../../themes/hours'
import { units } from '../../themes/Units'
import RainCard from '../weatherCard/RainCard'
import Counter from '../../redux/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { setDaily, setLocation } from '../../redux/Slice/WeatherRealTimeSlice'
import { TouchableOpacity } from 'react-native-gesture-handler'


const HomeBodyContent = () => {
    // Keys
    // CVppeP7u6Z2L1GyB3RWlxMmox1Vp3Ji6
    // x8UAL1n9KQtdlVVCfGQJ9npSJVsRTeJ3
    //QLTUU7PwEBZS1n1CNVUFsKesaUEz5IJ5
    const dispatch = useDispatch();
    const weatherRealtimeModel = useSelector((state) => state.weatherRealtimeModel);
    const fetchData = async () => {
        try {

            const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=istanbul&apikey=QLTUU7PwEBZS1n1CNVUFsKesaUEz5IJ5');
            if (!response.ok) {
                throw new Error('API isteği başarısız!');
            }
            const jsonData = await response.json();
            var dataTemp = jsonData;
            debugger;
            console.log(dataTemp.location.name);
            dispatch(setDaily({ daily: dataTemp.timelines.daily }))
            dispatch(setLocation({ lat: dataTemp.location.lat, lon: dataTemp.location.lon, name: dataTemp.location.name }))
        } catch (error) {
            console.error(error);
        }
    };


    console.log("Redux toolkitden gelen=" + weatherRealtimeModel.location.name)

    const getCustomFormattedDateTime = () => {
        const currentDate = new Date();
        const monthNames = [
            "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ];
        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const formattedDateTime = `${month} ${day}, ${hour}:${minute < 10 ? '0' : ''}${minute}`;
        return formattedDateTime;
    };
    const formattedDateTime = getCustomFormattedDateTime();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <TouchableOpacity onPress={() => fetchData()}>
                    <View>
                        <Text>Api Çek</Text>    
                    </View>
                </TouchableOpacity>
                {weatherRealtimeModel.daily.map((veri, index) => (
                        <Text key={index}>{veri.time}-{veri.values.temperatureAvg}</Text>
                    ))}
                <Text>{weatherRealtimeModel.location.lat}</Text>
                <Text>{weatherRealtimeModel.location.lon}</Text>
                <Text>{weatherRealtimeModel.location.name}</Text>
                {/*  <Counter/> //Redux için  test  */}
                <View style={{ paddingTop: 10, backgroundColor: '#CFF5E7' }}>
                    <View style={{ paddingTop: 10, paddingStart: 12 }}>
                        <Text style={{ fontWeight: '600' }}>{formattedDateTime}</Text>
                    </View>
                    <View style={styles.iconContext}>
                        <Text style={styles.bodyText}>
                            10 °
                        </Text>
                        <Logo width={150} height={150} />
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
                    <View style={{ marginBottom: 18 }}>
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
        paddingTop: 10,
        paddingLeft: 16,
    },
    detailHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    detailListContext: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        width: units.width / 2,
        paddingStart: 15
    },
    detailListText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black'
    },
    mainText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        padding: 10
    },
    bottomText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        padding: 10
    }
})

export default HomeBodyContent
