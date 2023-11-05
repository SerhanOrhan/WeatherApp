import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/WeatherRealTimeSlice";

//Storda oluşturduğumuz slicelerin yönetim yeri gibi  burdan çağırıp kullanmaya yarar

export const Store = configureStore({
    reducer:{
        weatherRealtimeModel:Slice.reducer,
    },
});