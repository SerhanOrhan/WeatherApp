const { createSlice } = require("@reduxjs/toolkit");

//Slice bir global değişken oluşturmaya ve bu değişkenin başlangıcta alması gereken değeri ve çağrıldığında hızlı kullanım olması için çalışacak methodu içerir.
//reducers içerisindeki methodlara verilen parametrelerden state ilgili değişkeni actions dışardan değer alabileceğini gösterir.
//actionsla dışardan alınan değeri ise actions.payload ile gelen değerleri alabiliriz.
const Slice = createSlice({
    name: "weatherRealtimeModel",
    initialState: {
        minutely: [{
            time: "",
            values: {
                cloudBase: 0.00,
                cloudCeiling: 0.00,
                cloudCover: 0,
                dewPoint: 0.00,
                freezingRainIntensity: 0,
                humidity: 0,
                precipitationProbability: 0,
                pressureSurfaceLevel: 0.00,
                rainIntensity: 0,
                sleetIntensity: 0,
                snowIntensity: 0,
                temperature: 0.00,
                temperatureApparent: 0.00,
                uvHealthConcern: 0,
                uvIndex: 0,
                visibility: 0,
                weatherCode: 0,
                windDirection: 0.00,
                windGust: 0.00,
                windSpeed: 0.00
            }
        }],
        hourly: [{
                time: "",
                values: {
                    cloudBase: 0,
                    cloudCeiling: 0,
                    cloudCover: 0,
                    dewPoint: 0,
                    evapotranspiration: 0,
                    freezingRainIntensity: 0,
                    humidity: 0,
                    iceAccumulation: 0,
                    iceAccumulationLwe: 0,
                    precipitationProbability: 0,
                    pressureSurfaceLevel: 0,
                    rainAccumulation: 0,
                    rainAccumulationLwe: 0,
                    rainIntensity: 0,
                    sleetAccumulation: 0,
                    sleetAccumulationLwe: 0,
                    sleetIntensity: 0,
                    snowAccumulation: 0,
                    snowAccumulationLwe: 0,
                    snowDepth: 0,
                    snowIntensity: 0,
                    temperature: 0,
                    temperatureApparent: 0,
                    uvHealthConcern: 0,
                    uvIndex: 0,
                    visibility: 0,
                    weatherCode: 0,
                    windDirection: 0,
                    windGust: 0,
                    windSpeed: 0
                }
            }],
        daily: [{
            time: "",
            values: {
                cloudBaseAvg: 0,
                cloudBaseMax: 0,
                cloudBaseMin: 0,
                cloudCeilingAvg: 0,
                cloudCeilingMax: 0,
                cloudCeilingMin: 0,
                cloudCoverAvg: 0,
                cloudCoverMax: 0,
                cloudCoverMin: 0,
                dewPointAvg: 0,
                dewPointMax: 0,
                dewPointMin: 0,
                freezingRainIntensityAvg: 0,
                freezingRainIntensityMax: 0,
                freezingRainIntensityMin: 0,
                humidityAvg: 0,
                humidityMax: 0,
                humidityMin: 0,
                iceAccumulationAvg: 0,
                iceAccumulationLweAvg: 0,
                iceAccumulationLweMax: 0,
                iceAccumulationLweMin: 0,
                iceAccumulationLweSum: 0,
                iceAccumulationMax: 0,
                iceAccumulationMin: 0,
                iceAccumulationSum: 0,
                moonriseTime: "",
                moonsetTime: "",
                precipitationProbabilityAvg: 0,
                precipitationProbabilityMax: 0,
                precipitationProbabilityMin: 0,
                pressureSurfaceLevelAvg: 0,
                pressureSurfaceLevelMax: 0,
                pressureSurfaceLevelMin: 0,
                rainAccumulationAvg: 0,
                rainAccumulationLweAvg: 0,
                rainAccumulationLweMax: 0,
                rainAccumulationLweMin: 0,
                rainAccumulationMax: 0,
                rainAccumulationMin: 0,
                rainAccumulationSum: 0,
                rainIntensityAvg: 0,
                rainIntensityMax: 0,
                rainIntensityMin: 0,
                sleetAccumulationAvg: 0,
                sleetAccumulationLweAvg: 0,
                sleetAccumulationLweMax: 0,
                sleetAccumulationLweMin: 0,
                sleetAccumulationLweSum: 0,
                sleetAccumulationMax: 0,
                sleetAccumulationMin: 0,
                sleetIntensityAvg: 0,
                sleetIntensityMax: 0,
                sleetIntensityMin: 0,
                snowAccumulationAvg: 0,
                snowAccumulationLweAvg: 0,
                snowAccumulationLweMax: 0,
                snowAccumulationLweMin: 0,
                snowAccumulationLweSum: 0,
                snowAccumulationMax: 0,
                snowAccumulationMin: 0,
                snowAccumulationSum: 0,
                snowIntensityAvg: 0,
                snowIntensityMax: 0,
                snowIntensityMin: 0,
                sunriseTime: "",
                sunsetTime: "",
                temperatureApparentAvg: 0,
                temperatureApparentMax: 0,
                temperatureApparentMin: 0,
                temperatureAvg: 0,
                temperatureMax: 0,
                temperatureMin: 0,
                uvHealthConcernAvg: 0,
                uvHealthConcernMax: 0,
                uvHealthConcernMin: 0,
                uvIndexAvg: 0,
                uvIndexMax: 0,
                uvIndexMin: 0,
                visibilityAvg: 0,
                visibilityMax: 0,
                visibilityMin: 0,
                weatherCodeMax: 0,
                weatherCodeMin: 0,
                windDirectionAvg: 0,
                windGustAvg: 0,
                windGustMax: 0,
                windGustMin: 0,
                windSpeedAvg: 0,
                windSpeedMax: 0,
                windSpeedMin: 0
            }
        }],
        location: {
            lat: 0.00,
            lon: 0.00,
            name: "",
            type: ""
        }
    },
    reducers: {
        setDaily(state, actions) {
            debugger;
            actions.payload.daily.forEach(element => {
                state.daily.push(element);
            });
        },
        setHourly(state, actions) {
            debugger;
            actions.payload.hourly.forEach(element => {
                state.hourly.push(element);
            });
        },
        setMinutely(state, actions) {
            debugger;
            actions.payload.minutely.forEach(element => {
                state.minutely.push(element);
            });
        },
        setLocation(state, actions) {
            debugger;
            state.location.lat = actions.payload.lat;
            state.location.lon = actions.payload.lon;
            state.location.name = actions.payload.name;
            state.location.type = actions.payload.type;
        }
    }
});

export default Slice;
export const { setLocation, setDaily,setHourly,setMinutely } = Slice.actions;