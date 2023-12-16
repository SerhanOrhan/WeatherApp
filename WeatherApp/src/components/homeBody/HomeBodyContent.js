import { FlatList, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/svgs/sun-sunny.svg'
import WeatherCard from '../weatherCard/WeatherCard'
import { hours, precipitation } from '../../themes/hours'
import { units } from '../../themes/Units'
import RainCard from '../weatherCard/RainCard'
import Counter from '../../redux/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { setDaily, setHourly, setLocation, setMinutely } from '../../redux/Slice/WeatherRealTimeSlice'
import { TouchableOpacity } from 'react-native-gesture-handler'


const HomeBodyContent = () => {
    // Keys
    // CVppeP7u6Z2L1GyB3RWlxMmox1Vp3Ji6
    // x8UAL1n9KQtdlVVCfGQJ9npSJVsRTeJ3
    //QLTUU7PwEBZS1n1CNVUFsKesaUEz5IJ5
    const dispatch = useDispatch();
    const weatherRealtimeModel = useSelector((state) => state.weatherRealtimeModel);
    console.log(weatherRealtimeModel)
    const uvIndexAvg = weatherRealtimeModel?.daily[1]?.values?.uvIndexAvg;
    const uvIndexMessage = uvIndexAvg > 0 ? "Yüksek" : "Düşük";
    const fetchData = async () => {
        try {
            debugger;
            const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=istanbul&apikey=x8UAL1n9KQtdlVVCfGQJ9npSJVsRTeJ3');
            if (!response.ok) {
                throw new Error('API isteği başarısız!');
            }
            const jsonData = await response.json();
            var dataTemp = jsonData;
            debugger;
            dispatch(setDaily({ daily: dataTemp.timelines.daily }))
            dispatch(setHourly({ hourly: dataTemp.timelines.hourly }))
            dispatch(setMinutely({ minutely: dataTemp.timelines.minutely }))
            dispatch(setLocation({ lat: dataTemp.location.lat, lon: dataTemp.location.lon, name: dataTemp.location.name, type: dataTemp.location.type }))
        } catch (error) {
            console.error(error);
        }
    };
    const getCustomFormattedDateTime = () => {
        const currentDate = new Date();
        const dayOfWeekNames = [
            "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"
        ];
        const monthNames = [
            "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ];
        const dayOfWeek = dayOfWeekNames[currentDate.getDay()];
        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();
        const formattedDateTime = `${day} ${month} ${dayOfWeek}`;
        return formattedDateTime;
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <TouchableOpacity onPress={() => fetchData()}>
                    <View>
                        <Text>Api Çek</Text>
                    </View>
                </TouchableOpacity>
                {/*  <Counter/> //Redux için  test  */}
                <View style={{ paddingTop: 10, backgroundColor: '#CFF5E7' }}>
                    <View style={{ paddingTop: 10, paddingStart: 12 }}>
                        <Text style={{ fontWeight: '600' }}>{getCustomFormattedDateTime()}</Text>
                    </View>
                    <View style={styles.iconContext}>
                        <Text style={styles.bodyText}>
                            {parseInt(weatherRealtimeModel?.daily[1]?.values?.temperatureAvg)} °
                        </Text>
                        <Logo width={150} height={150} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                        <View style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, alignItems: 'center' }}>
                                Hissedilen {parseInt(weatherRealtimeModel.daily[1]?.values?.temperatureApparentAvg)} °
                            </Text>
                            <Text style={{ fontSize: 16 }}>
                                Gece {parseInt(weatherRealtimeModel.daily[1]?.values?.temperatureMin)} ° ↓ Gündüz {parseInt(weatherRealtimeModel.daily[1]?.values?.temperatureMax)} ° ↑
                            </Text>
                        </View>
                        <Text style={{ fontSize: 26 }}>
                            Çok Güneşli
                        </Text>
                    </View>
                    <View>
                        <FlatList
                            data={weatherRealtimeModel.hourly.filter(item => {
                                const dateTime = new Date(item.time);
                                const today = new Date();

                                // Sadece bugünün verilerini al
                                return (
                                    dateTime.getDate() === today.getDate() &&
                                    dateTime.getMonth() === today.getMonth() &&
                                    dateTime.getFullYear() === today.getFullYear()
                                );
                            })}
                            keyExtractor={(item, index) => item.id + index.toString()}
                            horizontal
                            renderItem={({ item, index }) => {
                                debugger;
                                const dateTime = new Date(item.time);
                                const formattedTime = `${dateTime.getHours()}:${dateTime.getMinutes()}0`;
                                const formattedDegree = `${parseInt(item.values.temperature)} °`;

                                return <WeatherCard index={index} hour={formattedTime} icon="" degree={formattedDegree} />;
                            }}
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
                                <Text style={styles.detailListText}>{parseInt(weatherRealtimeModel?.daily[1]?.values?.humidityAvg)} %</Text>
                                <Text style={styles.detailListText}>{parseInt(weatherRealtimeModel?.daily[1]?.values?.pressureSurfaceLevelAvg)} mBar</Text>
                                <Text style={styles.detailListText}>{uvIndexMessage} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <View style={styles.main}>
                            <Text style={styles.mainText}>Yağış</Text>
                        </View>
                        <FlatList
                            data={weatherRealtimeModel.hourly.filter(item => {
                                const dateTime = new Date(item.time);
                                const today = new Date();

                                // Sadece bugünün verilerini al
                                return (
                                    dateTime.getDate() === today.getDate() &&
                                    dateTime.getMonth() === today.getMonth() &&
                                    dateTime.getFullYear() === today.getFullYear()
                                );
                            })}
                            keyExtractor={(item, index) => item.id + index.toString()}
                            horizontal
                            renderItem={({ item, index }) => {
                                debugger;
                                const dateTime = new Date(item.time);
                                const formattedTime = `${dateTime.getHours()}:${dateTime.getMinutes()}0`;
                                const formattedDegree = `${parseInt(item.values.precipitationProbability)}%`;

                                return <RainCard index={index} hour={formattedTime} icon="" percent={formattedDegree} />;
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.bottomText}>Toplam günlük hacim {weatherRealtimeModel?.daily[1]?.values?.rainAccumulationMax} mm </Text>
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
