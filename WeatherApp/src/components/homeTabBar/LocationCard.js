import { StyleSheet, Text, View, Platform, PermissionsAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { units } from '../../themes/Units'



const LocationCard = () => {
    const [region, setRegion] = useState(null);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        getMyLocation()

    }, [])

    const getMyLocation = () => {
        Geolocation.getCurrentPosition((info) => {
            console.log("LAT", info.coords.latitude)
            console.log("LONG", info.coords.longitude)

            setRegion({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            })
        },
            () => { console.log("Error") }, {
            enableHighAccuracy: true,
            timeout: 2000,
        })
    }
    const newMarker = (e) => {
        console.log(e.nativeEvent.coordinate);
        let dados = {
            key: markers.length,
            coords: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
            },
            pinColor: '#FF0000'
        }
        setRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        })
        setMarkers(oldArray => [...oldArray, dados])
    }
    return (
        <View>
            <MapView
                onMapReady={() => {
                    Platform.OS === 'android' ?
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                            .then((response) => {
                                console.log(response.data);
                            })
                        : ''
                }}
                style={{ width: units.width, height: units.height/2 }}
                region={region}
                zoomEnabled={true}
                minZoomLevel={17}
                showsUserLocation={true}
                loadingEnabled={true}
                zoomControlEnabled={true} // haritanın sağında  +  -  butonu getirir ve yakınlaşma ve uzaklasmayı aktif eder.
                //showsTraffic={true}     tıkladığın konumu referans alarak mevcut konumdan rota çizer google mapse baglar
                onPress={(e) => newMarker(e)}
            >
                {markers.map(marker => {
                    return (
                        <Marker key={marker.key} coordinate={marker.coords} pinColor={marker.pinColor} />
                    )
                })}
            </MapView>
        </View>
    )
}

export default LocationCard

const styles = StyleSheet.create({})